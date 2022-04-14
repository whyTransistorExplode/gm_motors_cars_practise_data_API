package uz.pdp.appgm.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uz.pdp.appgm.entity.Value;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResSelectedValue {
    private Value[] values;
    private Integer selectedValueId;
}
