package uz.pdp.appgm.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResToken {
    private String body;
    private String tokenType="Bearer ";

    public ResToken(String body) {
        this.body = body;
    }
}
