package uz.pdp.appgm.projection;

import org.springframework.data.rest.core.config.Projection;
import uz.pdp.appgm.entity.Position;

@Projection(name = "customPosition", types = Position.class)
public interface CustomPosition {
    Integer getId();

    String getName();

    String getDescription();

}
