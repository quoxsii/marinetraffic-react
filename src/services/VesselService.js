import axios from 'axios';

const VESSELS_REST_API_URL = 'http://localhost:8080/api/vessels';

class VesselService {
    static async getVesselByMmsi(mmsi) {
        return await axios.get(`${VESSELS_REST_API_URL}/${mmsi}`);
    }

    static async getAllVessels() {
        return await axios.get(VESSELS_REST_API_URL,{
            params: {
                paged: false
            }
        });
    }
}

export default VesselService;
