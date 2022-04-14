package uz.pdp.appgm.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import uz.pdp.appgm.entity.User;
import uz.pdp.appgm.repository.RoleRepository;
import uz.pdp.appgm.repository.UserRepository;

import java.util.Date;
import java.util.HashSet;

@Component
public class DataLoader implements CommandLineRunner {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    RoleRepository roleRepository;

    @Value("${spring.datasource.initialization-mode}")
    private String initMode;


    @Override
    public void run(String... args) throws Exception {
        if (initMode.equals("always")) {
            userRepository.save(
                    new User(
                            "Sirojiddin",
                            "Saidov",
                            "Jumaqulovich",
                            new Date(),
                            "+998996791136",
                            passwordEncoder.encode("root123"),
                            new HashSet<>(roleRepository.findAll())
                    )
            );



        }
    }
}
