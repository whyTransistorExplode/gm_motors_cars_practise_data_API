package uz.pdp.appgm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import uz.pdp.appgm.entity.Client;
import uz.pdp.appgm.entity.Contact;
import uz.pdp.appgm.payload.ApiResponse;
import uz.pdp.appgm.payload.ReqClient;
import uz.pdp.appgm.payload.ResPageable;
import uz.pdp.appgm.repository.ClientRepository;

import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;
    @Autowired
    ContractServiceImpl contractService;

    public ApiResponse editClient(ReqClient reqClient) {
        try {
            Optional<Client> optionalClient = clientRepository.findById(reqClient.getId());
            if (optionalClient.isPresent()) {
                if (!clientRepository.findByPassportSerialEqualsIgnoreCaseAndPassportNumberAndPersonTypeAndIdNot(reqClient.getPassportSerial(), reqClient.getPassportNumber(), reqClient.getPersonType(), reqClient.getId()).isPresent()) {
                    Client client = optionalClient.get();
                    client.setFirstName(reqClient.getFirstName());
                    client.setLastName(reqClient.getLastName());
                    client.setMiddleName(reqClient.getMiddleName());
                    client.setTin(reqClient.getTin());
                    client.setPassportSerial(reqClient.getPassportSerial());
                    client.setPassportNumber(reqClient.getPassportNumber());
                    client.setBirthDate(reqClient.getBirthDate());
                    client.setGender(reqClient.getGender());
                    Contact editContact = contractService.editContact(client.getContact().getId(), reqClient.getReqContact());
                    client.setContact(editContact);
                    client.setPersonType(reqClient.getPersonType());
                    client.setCompanyName(reqClient.getCompanyName());
                    client.setLicenceNumber(reqClient.getLicenceNumber());
                    client.setLicenceExpire(reqClient.getLicenceExpire());
                    clientRepository.save(client);
                    return new ApiResponse("Edited client", true);
                }
                return new ApiResponse("Such client already exist", false);
            }
            return new ApiResponse("Such not found", false);
        } catch (Exception e) {
            return new ApiResponse("Xatolik", false);
        }
    }


    public ResPageable getClients(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Client> clientPage = clientRepository.findAll(pageable);
        ResPageable resPageable = new ResPageable();
//        resPageable.setPage(clientPage.getNumber());
        resPageable.setPage(page);
//        resPageable.setSize(clientPage.getSize());
        resPageable.setSize(size);
        resPageable.setTotalElements(clientPage.getTotalElements());
        resPageable.setTotalPages(clientPage.getTotalPages());
        resPageable.setObject(clientPage.getContent());
        return resPageable;
    }
}
