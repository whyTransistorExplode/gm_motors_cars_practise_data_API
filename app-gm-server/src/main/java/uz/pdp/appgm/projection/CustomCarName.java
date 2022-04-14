package uz.pdp.appgm.projection;

import org.springframework.data.rest.core.config.Projection;
import uz.pdp.appgm.entity.CarName;
import uz.pdp.appgm.entity.Detail;

@Projection(name = "customCarName", types = CarName.class)
public interface CustomCarName {
    Integer getId();

    String getName();
}
