package uz.pdp.appgm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import uz.pdp.appgm.entity.CarTemplate;
import uz.pdp.appgm.entity.CarTemplateValue;
import uz.pdp.appgm.entity.Value;
import uz.pdp.appgm.payload.ApiResponse;
import uz.pdp.appgm.payload.ReqCarTemplate;
import uz.pdp.appgm.payload.ResCarTemplate;
import uz.pdp.appgm.payload.ResSelectedValue;
import uz.pdp.appgm.repository.CarTemplateRepository;
import uz.pdp.appgm.repository.CarTemplateValueRepository;
import uz.pdp.appgm.repository.rest.CarNameRepository;
import uz.pdp.appgm.repository.rest.PositionRepository;
import uz.pdp.appgm.repository.rest.ValueRepository;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CarTemplateService {
    @Autowired
    CarTemplateRepository carTemplateRepository;
    @Autowired
    CarNameRepository carNameRepository;
    @Autowired
    PositionRepository positionRepository;
    @Autowired
    ValueRepository valueRepository;
    @Autowired
    CarTemplateValueRepository carTemplateValueRepository;

    public ApiResponse addCarTemplate(ReqCarTemplate reqCarTemplate) {
        try {
            CarTemplate carTemplate = carTemplateRepository.save(new CarTemplate(
                    carNameRepository.findById(reqCarTemplate.getCarNameId()).orElseThrow(() -> new ResourceNotFoundException("getCarName")),
                    positionRepository.findById(reqCarTemplate.getPositionId()).orElseThrow(() -> new ResourceNotFoundException("getPosition"))
            ));
            List<CarTemplateValue> collect = reqCarTemplate.getValues().stream().map(integer -> makeCarTemplateValue(integer, carTemplate)).collect(Collectors.toList());
            carTemplateValueRepository.saveAll(collect);
            return new ApiResponse("Saved", true);
        } catch (Exception e) {
            return new ApiResponse("Xatolik", false);
        }
    }


    public ResCarTemplate getCarTemplate(CarTemplate carTemplate) {
        return new ResCarTemplate(
                carTemplate.getId(),
                carTemplate.getCarName().getName(),
                carTemplate.getCarName().getId(),
                carTemplate.getPosition().getName() + "(" + carTemplate.getPosition().getDescription() + ")",
                carTemplate.getPosition().getId(),
                carTemplate.getCarTemplateValues().stream().map(carTemplateValue -> getSelectedValue(carTemplateValue.getValue())).collect(Collectors.toList())

        );
    }

    public List<ResCarTemplate> getCarTemplates() {
        return carTemplateRepository.findAll().stream().map(this::getCarTemplate).collect(Collectors.toList());
    }

    public ResSelectedValue getSelectedValue(Value value) {
        return new ResSelectedValue(getValueArray(value), value.getId());
    }

    public Value[] getValueArray(Value value) {
        List<Value> values = valueRepository.findAllByDetailId(value.getDetail().getId());
        return values.toArray(new Value[0]);
    }

    public ApiResponse editCarTemplate(UUID id, ReqCarTemplate reqCarTemplate) {
        try {
            CarTemplate carTemplate = carTemplateRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getCarTemplate"));
            carTemplate.setCarName(carNameRepository.findById(reqCarTemplate.getCarNameId()).orElseThrow(() -> new ResourceNotFoundException("getCarName")));
            carTemplate.setPosition(positionRepository.findById(reqCarTemplate.getPositionId()).orElseThrow(() -> new ResourceNotFoundException("getPosition")));
            carTemplateValueRepository.deleteAll(carTemplate.getCarTemplateValues());
            List<CarTemplateValue> collect = reqCarTemplate.getValues().stream().map(integer -> makeCarTemplateValue(integer, carTemplate)).collect(Collectors.toList());
            carTemplateValueRepository.saveAll(collect);
            return new ApiResponse("Edited", true);
        } catch (Exception e) {
            return new ApiResponse("Bunday car template mavjud emas", false);
        }

    }

    CarTemplateValue makeCarTemplateValue(Integer valueId, CarTemplate carTemplate) {
        return new CarTemplateValue(
                valueRepository.findById(valueId).orElseThrow(() -> new ResourceNotFoundException("getValue")),
                carTemplate
        );
    }


}
