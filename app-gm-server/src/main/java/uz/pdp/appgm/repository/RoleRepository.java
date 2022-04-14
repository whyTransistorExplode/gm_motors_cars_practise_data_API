package uz.pdp.appgm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.pdp.appgm.entity.Role;
import uz.pdp.appgm.entity.enums.RoleName;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Role findByRoleName(RoleName roleName);
}
