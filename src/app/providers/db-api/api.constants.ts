import { TripStatus } from './model/trips.model';

export enum ApiConstants {
  BASE_URL = 'https://tsctbsjuktimnuztflau.supabase.co/rest/v1',
  PATH_USERS = '/users',
  PATH_TRIPS = '/trips',
  PATH_CAREERS = '/careers',
  PATH_TRIPS_AGREEMENT = '/trips_agreements',
  PATH_USER_TYPES = '/user_types',
  PATH_VEHICLE = '/vehicle',
  USERBYEMAIL_QUERY_PARAM = 'user_email',
  PATH_RPC_ACTIVE_TRIPS = '/rpc/get_active_trips',
  PATH_RPC_OPEN_ACTIVE_TRIPS = `/rpc/get_active_trips?trip_seats_status=eq.${TripStatus.OPEN}`,
  PATH_RPC_USER_PROFILE = '/rpc/user_profile',
  PATH_RPC_ACTIVE_AGREEMENTS = '/rpc/get_active_agreements',
}
