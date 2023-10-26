import { Roles } from "../models/roles.js";
import { AgeFilter } from "../models/ageFilter.js";

export async function crearDatosPredeterminados() {
    

    await Roles.findOrCreate({
        where: {
            user_role: 'user'
        }
    });
    
    await Roles.findOrCreate({
        where: {
            user_role: 'admin'
        }
    });
    
    await AgeFilter.findOrCreate({
        where: {
            age_range: '0-1'
        }
    });
    
    await AgeFilter.findOrCreate({
        where: {
            age_range: '1-2'
        }
    });
    
    await AgeFilter.findOrCreate({
        where: {
            age_range: '2-3'
        }
    });
    
    await AgeFilter.findOrCreate({
        where: {
            age_range: '4-5'
        }
    });

}
