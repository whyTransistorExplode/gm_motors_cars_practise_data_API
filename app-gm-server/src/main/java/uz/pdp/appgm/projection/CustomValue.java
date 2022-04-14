package uz.pdp.appgm.projection;

import org.springframework.data.rest.core.config.Projection;
import uz.pdp.appgm.entity.Detail;
import uz.pdp.appgm.entity.Value;

@Projection(name = "customValue", types = Value.class)
public interface CustomValue {
    Integer getId();

    String getName();
}
