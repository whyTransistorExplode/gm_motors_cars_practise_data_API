package uz.pdp.appgm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.pdp.appgm.entity.Attachment;
import uz.pdp.appgm.entity.AttachmentContent;

import java.util.UUID;

public interface AttachmentContentRepository extends JpaRepository<AttachmentContent, UUID> {
    AttachmentContent findByAttachmentId(UUID id);
}
