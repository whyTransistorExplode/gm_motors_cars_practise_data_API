package uz.pdp.appgm.repository.rest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import uz.pdp.appgm.entity.Detail;
import uz.pdp.appgm.projection.CustomDetail;

@CrossOrigin
@RepositoryRestResource(path = "detail", collectionResourceRel = "list",excerptProjection = CustomDetail.class)
public interface DetailRepository extends JpaRepository<Detail, Integer> {
}
