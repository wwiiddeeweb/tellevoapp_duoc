# TO-DO

## Requisitos Entrega

- Persistencia local en teléfono
- Navegación optimizada (velando por la seguridad y autorización del usuario)
  - Direccionamientos entre rutas deben ser validados correctamente.

## Lista de pendientes

- Encriptar/Desencriptar pass hacia y desde BBDD (@ponytakxn)
  - Encriptación: Crypto.js, AES256, Secret: Mínimo 12 chars alfanuméricos
  - Desencriptación: Interceptor de Angular (desencripta el payload antes de llegar, docs: https://angular.io/api/common/http/HttpInterceptor)
- Desarrollar pantallas (ambxs)
- Mejorar modelo BBDD (@wwiiddeeweb)
- Implementar API Google Maps
- Obtener permisos GPS del teléfono, mapear en google maps en realtime.

- Arquitectura Pantallas x Nivel Usuario
  - Passenger (@ponytakxn)
    - Login
      - Inicio
        - Formulario corto "Dónde vas?", que filtre los viajes x destino.
      - Encontrar Viaje
        - Lista de todos los drivers que ofrecen viaje
      - Mis Viajes
        - Lista de historial de viajes
      - Mi Perfil
      - Ayuda
  - Driver (@wwiiddeeweb)
    - Login
      - Dashboard
        - Ej: "hoy tienes 1 viaje x realizar", lista de pasajeros, etc...
          - Iniciar Viaje
            - Pantalla viaje actual
      - Agendamiento de viajes

## Alcance Técnico

- La lista de drivers debe incluir el tipo de vehículo de cada driver
- Cada driver debe tener un perfil y valoración
- Registro
  - Debe poder registrar usuarios passengers y usuarios drivers
  - El state interno de la app debe mostrar pantallas de acuerdo a nivel de autorización.
- Autorización: la entradas a todas las pantallas privadas deben comprobar la autorización.
- Implementar un Contexto Global en la aplicación.

## Dominio

- Viajes (trips)

  - pickup_ref (varchar), pickup_coords (varchar), dropoff_ref (varchar), dropoff_coords (varchar), seats_offered,
  - vehicle_id (int8), driver_id, trip_seats_status ('OPEN','CLOSED'), trip_final_status ('COMPLETED','NOT_COMPLETED','CANCELLED')

- Viaje Acordado x Estudiante (trips_agreements)

  - trip_id, student_id, dropoff_ref (varchar), dropoff_coords (varchar), status (ACCEPTED, REJECTED)

- Vehículo

  - vehicle_id, driver_id, vehicle_seats, vehicle_patent, vehicle_model, vehicle_brand, vehicle_year.

- Usuarios

  - id, user_name, user_rut, user_pwd, user_email, user_phone, user_genre, user_type, user_ranking, user_career, created_at

- Tipo de Usuarios
  - id, type_name

## Spikes

- Firebase Login:
  - https://www.positronx.io/full-angular-firebase-authentication-system/#tc_784_04
