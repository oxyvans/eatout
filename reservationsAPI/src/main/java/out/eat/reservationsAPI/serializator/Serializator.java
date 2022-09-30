package out.eat.reservationsAPI.serializator;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class Serializator {

    private static Logger LOGGER = LoggerFactory.getLogger(Serializator.class);
    public <T> String serialize(T object) {

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.INDENT_OUTPUT, true);
        mapper.registerModule(new JavaTimeModule());
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        String data = null;
        try {
            data = mapper.writeValueAsString(object);
        } catch (JsonProcessingException e) {
            LOGGER.error("Serialization process error. Details: " + e.getMessage());
        }
        LOGGER.info("Serialize success: " + object.getClass().getSimpleName() + " item.");
        return data;
    }

}
