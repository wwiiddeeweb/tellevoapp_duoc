import { UserTypes } from '../../../shared/domain/user-types.domain';
import { ApiConstants } from '../api.constants';

export class TripsRepositoryConfig {
  private baseUrl: string = `${ApiConstants.BASE_URL}`;

  constructor() {}

  getTripsUrl(): string {
    return `${this.baseUrl}${ApiConstants.PATH_TRIPS}`;
  }

  getActiveTripsByTripIDsRPCUrl(ids: number[] = []): string {
    return `${this.baseUrl}${
      ApiConstants.PATH_RPC_ACTIVE_TRIPS
    }?trip_id=in.(${ids.join(',')})`;
  }

  getActiveTripsRPCUrl(): string {
    return `${this.baseUrl}${ApiConstants.PATH_RPC_ACTIVE_TRIPS}`;
  }

  getOpenActiveTripsRPCUrl(): string {
    return `${this.baseUrl}${ApiConstants.PATH_RPC_OPEN_ACTIVE_TRIPS}`;
  }

  getTakenTripsByUserID(userID: string, userType: UserTypes): string {
    return `${this.baseUrl}${ApiConstants.PATH_RPC_ACTIVE_TRIPS}`;
  }

  getTripsByDriverIdRPCUrl(driverID: number): string {
    return `${this.baseUrl}${ApiConstants.PATH_RPC_ACTIVE_TRIPS}?user_id=eq.${driverID}`;
  }
}
