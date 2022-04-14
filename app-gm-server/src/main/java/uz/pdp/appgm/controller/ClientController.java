package uz.pdp.appgm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.pdp.appgm.utils.AppConstants;
import uz.pdp.appgm.entity.Client;
import uz.pdp.appgm.entity.enums.PersonType;
import uz.pdp.appgm.payload.ApiResponse;
import uz.pdp.appgm.payload.ReqClient;
import uz.pdp.appgm.repository.ClientRepository;
import uz.pdp.appgm.service.ClientService;

import java.util.UUID;

@RestController
@RequestMapping("/api/client")
public class ClientController {
    @Autowired
    ClientService clientService;
    @Autowired
    ClientRepository clientRepository;

    @PutMapping
    public HttpEntity<?> editClient(@RequestBody ReqClient reqClient) {
        ApiResponse apiResponse = clientService.editClient(reqClient);
        return ResponseEntity.status(apiResponse.isSuccess() ? HttpStatus.ACCEPTED : HttpStatus.CONFLICT).body(apiResponse);
    }

    @GetMapping
    public HttpEntity<?> getClients(@RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE) int page,
                                    @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_SIZE) int size) {
        return ResponseEntity.ok(clientService.getClients(page, size));
    }

    @GetMapping("/{id}")
    public HttpEntity<?> getClient(@PathVariable UUID id) {
        return ResponseEntity.ok(clientRepository.findById(id).orElseGet(Client::new));
    }


    @GetMapping("/check")
    public HttpEntity<?> getClientIfPresent(
            @RequestParam(value = "passportSerial", defaultValue = "") String passportSerial,
            @RequestParam(value = "passportNumber", defaultValue = "") String passportNumber,
            @RequestParam(value = "personType", defaultValue = "PHYSICAL") PersonType personType) {
        return ResponseEntity.ok(clientRepository.findByPassportSerialEqualsIgnoreCaseAndPassportNumberAndPersonType(passportSerial, passportNumber, personType).orElseGet(Client::new));
    }

}
