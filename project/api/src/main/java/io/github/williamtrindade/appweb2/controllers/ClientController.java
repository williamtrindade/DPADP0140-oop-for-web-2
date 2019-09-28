package io.github.williamtrindade.appweb2.controllers;

import io.github.williamtrindade.appweb2.models.Client;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@RestController
// @RequestBody
@RequestMapping("/clients")
public class ClientController {
    /**
     * Return All
     *
     * @return
     */
    @GetMapping
    public Client index() {
        Client client = new Client(1, "Wil", "deede");
        return client;
    }

    /**
     * Return JSON
     *
     * @return
     */
    @GetMapping("/json")
    public ArrayList<Client> getClients() {
        ArrayList<Client> clients = new ArrayList<>();
        Client client1 = new Client(1, "Wil", "deede");
        Client client2 = new Client(1, "Leo", "dssd");
        clients.add(client1);
        clients.add(client2);
        return clients;
    }
}
