package uz.pdp.appgm.repository.rest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import uz.pdp.appgm.entity.CarName;
import uz.pdp.appgm.entity.Position;
import uz.pdp.appgm.projection.CustomCarName;

import java.util.List;

@CrossOrigin
@RepositoryRestResource(path = "carName", collectionResourceRel = "list", excerptProjection = CustomCarName.class)
public interface CarNameRepository extends JpaRepository<CarName, Integer> {

}
