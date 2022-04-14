package uz.pdp.appgm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.pdp.appgm.entity.CarTemplateValue;

import java.util.UUID;

public interface CarTemplateValueRepository extends JpaRepository<CarTemplateValue, UUID> {
}
