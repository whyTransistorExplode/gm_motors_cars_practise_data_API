package uz.pdp.appgm.repository.rest;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.pdp.appgm.entity.District;
import uz.pdp.appgm.entity.Region;

public interface RegionRepository extends JpaRepository<Region, Integer> {
}
