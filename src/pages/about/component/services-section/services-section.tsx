import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { services } from "./services";
import ServiceCard from "../service-card";

const ServicesSection: React.FC = () => {
    return (
      <Box sx={{ padding:"20px 0" ,backgroundColor:"#f5f5f5" }}>
        <Container sx={{ display: "flex",flexWrap:"wrap", justifyContent: "center", gap: 8, }}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
        </Container>
      </Box>
    );
  };
  
  export default ServicesSection;