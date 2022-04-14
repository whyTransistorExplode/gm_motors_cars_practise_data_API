package uz.pdp.appgm.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uz.pdp.appgm.entity.CarName;
import uz.pdp.appgm.entity.Color;
import uz.pdp.appgm.entity.Position;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResCar {
    private UUID id;
    private CarName carName;
    private Position position;
    private Color color;
    private UUID photoId;
    private double price;
    private boolean active;
    private String photoUrl;
}
