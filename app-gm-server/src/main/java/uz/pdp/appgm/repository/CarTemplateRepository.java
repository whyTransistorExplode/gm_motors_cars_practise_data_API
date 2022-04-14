package uz.pdp.appgm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.pdp.appgm.entity.CarTemplate;

import java.util.UUID;

public interface CarTemplateRepository extends JpaRepository<CarTemplate, UUID> {
}
