package uz.pdp.appgm.projection;

import org.springframework.data.rest.core.config.Projection;
import uz.pdp.appgm.entity.Detail;

@Projection(name = "customDetail", types = Detail.class)
public interface CustomDetail {
    Integer getId();

    String getName();
}
