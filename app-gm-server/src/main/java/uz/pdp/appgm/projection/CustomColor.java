package uz.pdp.appgm.projection;

import org.springframework.data.rest.core.config.Projection;
import uz.pdp.appgm.entity.Color;

@Projection(name = "customColor", types = Color.class)
public interface CustomColor {
    Integer getId();

    String getName();

    String getCode();
}
