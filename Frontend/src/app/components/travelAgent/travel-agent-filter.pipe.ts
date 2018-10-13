import { PipeTransform, Pipe } from '@angular/core';
import { TravelAgent } from '../../services/user-service/travelAgent/travelagent.model'

@Pipe({
    name:'TravelAgentFilter'
})

export class TravelAgentFilterPipe implements PipeTransform {
    transform(travelagents: TravelAgent[], searchKeyword: string, TravelAgent: TravelAgent): TravelAgent[]{
        if (!travelagents || !searchKeyword){
            return travelagents;
        }else{
            return travelagents.filter(travelagents =>
                travelagents.fname.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 || 
                travelagents.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1||
                travelagents.telephone.toString().indexOf(searchKeyword.toString()) !== -1);
        }
    }
}