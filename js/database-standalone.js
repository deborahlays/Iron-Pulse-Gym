/**
 * VÃ‰RTICE FITNESS - Banco de Dados Inicial e Estrutura de Armazenamento
 * Rede de 89 Academias em SÃ£o Paulo
 * Paleta de Cores: Vinho (#7A1630), Preto (#0B0B0D), Azul-Marinho (#101C35)
 */

// Chaves de armazenamento no LocalStorage
const STORAGE_KEYS = {
  GYMS: 'vertice_gyms_v1',
  CLIENTS: 'vertice_clients_v1',
  CURRENT_USER: 'vertice_current_user_v1',
  PERSONALS: 'vertice_personals_v1',
  PERSONAL_BOOKINGS: 'vertice_personal_bookings_v1',
  MEDICAL_APPOINTMENTS: 'vertice_medical_appointments_v1',
  EXERCISES: 'vertice_exercises_v1',
  PROMOTIONS: 'vertice_promotions_v1',
  PAYMENTS: 'vertice_payments_v1'
};

// 89 Unidades estruturadas pelo Estado de SÃ£o Paulo
const INITIAL_GYMS = [
  // --- SÃƒO PAULO CAPITAL: CENTRO & EXPANSÃƒO (1-10) ---
  {
    id: 1,
    name: "VÃ©rtice Paulista Prime",
    region: "Capital - Centro/Paulista",
    address: "Av. Paulista, 1842 - Bela Vista, SÃ£o Paulo - SP",
    cep: "01310-200",
    lat: -23.5598,
    lng: -46.6582,
    hoursWeek: "05:30 Ã s 23:30",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3288-4001",
    amenities: ["MusculaÃ§Ã£o High-End", "Ãrea Cardio PanorÃ¢mica", "Spinning Imersivo", "Sauna Seca", "Estacionamento GrÃ¡tis", "EspaÃ§o Recovery"],
    featured: true
  },
  {
    id: 2,
    name: "VÃ©rtice ConsolaÃ§Ã£o",
    region: "Capital - Centro/Paulista",
    address: "Rua da ConsolaÃ§Ã£o, 2410 - ConsolaÃ§Ã£o, SÃ£o Paulo - SP",
    cep: "01301-100",
    lat: -23.5532,
    lng: -46.6610,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 3120-4002",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Box Funcional", "VestiÃ¡rio com Secador", "Acesso TotalPass"]
  },
  {
    id: 3,
    name: "VÃ©rtice HigienÃ³polis",
    region: "Capital - Centro/Paulista",
    address: "Rua MaranhÃ£o, 531 - HigienÃ³polis, SÃ£o Paulo - SP",
    cep: "01240-001",
    lat: -23.5460,
    lng: -46.6565,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3824-4003",
    amenities: ["MusculaÃ§Ã£o Premium", "Pilates Studio", "Sauna a Vapor", "VestiÃ¡rio VIP", "Valet"]
  },
  {
    id: 4,
    name: "VÃ©rtice Bela Vista - Brigadeiro",
    region: "Capital - Centro/Paulista",
    address: "Av. Brigadeiro LuÃ­s AntÃ´nio, 1200 - Bela Vista, SÃ£o Paulo - SP",
    cep: "01318-001",
    lat: -23.5615,
    lng: -46.6478,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 3251-4004",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Aulas Coletivas", "ArmÃ¡rios com Biometria"]
  },
  {
    id: 5,
    name: "VÃ©rtice Liberdade",
    region: "Capital - Centro/Paulista",
    address: "PraÃ§a da Liberdade, 190 - Liberdade, SÃ£o Paulo - SP",
    cep: "01503-010",
    lat: -23.5552,
    lng: -46.6358,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 3209-4005",
    amenities: ["MusculaÃ§Ã£o", "Ãrea Funcional", "Ducha Relaxante", "Wi-Fi 6 Ultra"]
  },
  {
    id: 6,
    name: "VÃ©rtice RepÃºblica Cultural",
    region: "Capital - Centro/Paulista",
    address: "Av. SÃ£o JoÃ£o, 1150 - RepÃºblica, SÃ£o Paulo - SP",
    cep: "01036-100",
    lat: -23.5412,
    lng: -46.6415,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "09:00 Ã s 16:00",
    phone: "(11) 3331-4006",
    amenities: ["MusculaÃ§Ã£o", "Ringue de Boxe", "Cardio", "BicicletÃ¡rio Seguro"]
  },
  {
    id: 7,
    name: "VÃ©rtice AclimaÃ§Ã£o Park",
    region: "Capital - Centro/Paulista",
    address: "Rua TopÃ¡zio, 380 - AclimaÃ§Ã£o, SÃ£o Paulo - SP",
    cep: "04105-061",
    lat: -23.5732,
    lng: -46.6340,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 3277-4007",
    amenities: ["MusculaÃ§Ã£o", "Pista de Aquecimento", "Spinning", "EspaÃ§o Shake"]
  },
  {
    id: 8,
    name: "VÃ©rtice Bom Retiro",
    region: "Capital - Centro/Paulista",
    address: "Rua JosÃ© Paulino, 890 - Bom Retiro, SÃ£o Paulo - SP",
    cep: "01120-000",
    lat: -23.5310,
    lng: -46.6390,
    hoursWeek: "06:30 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 15:00",
    phone: "(11) 3361-4008",
    amenities: ["MusculaÃ§Ã£o", "Ãrea de Peso Livre Extra", "Cardio"]
  },
  {
    id: 9,
    name: "VÃ©rtice Santa CecÃ­lia",
    region: "Capital - Centro/Paulista",
    address: "Rua das Palmeiras, 215 - Santa CecÃ­lia, SÃ£o Paulo - SP",
    cep: "01226-010",
    lat: -23.5385,
    lng: -46.6515,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 3662-4009",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Cross Training", "VestiÃ¡rios Climatizados"]
  },
  {
    id: 10,
    name: "VÃ©rtice ParaÃ­so",
    region: "Capital - Centro/Paulista",
    address: "Rua Vergueiro, 1450 - ParaÃ­so, SÃ£o Paulo - SP",
    cep: "04101-000",
    lat: -23.5780,
    lng: -46.6405,
    hoursWeek: "05:30 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3884-4010",
    amenities: ["MusculaÃ§Ã£o High-End", "Ãrea Cardio", "VestiÃ¡rio VIP", "CafÃ© Fit"]
  },

  // --- SÃƒO PAULO CAPITAL: ZONA SUL (11-25) ---
  {
    id: 11,
    name: "VÃ©rtice Moema PÃ¡ssaros",
    region: "Capital - Zona Sul",
    address: "Av. PavÃ£o, 620 - Moema, SÃ£o Paulo - SP",
    cep: "04516-011",
    lat: -23.6025,
    lng: -46.6710,
    hoursWeek: "05:30 Ã s 23:30",
    hoursWeekend: "08:00 Ã s 19:00",
    phone: "(11) 5051-4011",
    amenities: ["MusculaÃ§Ã£o BiomecÃ¢nica", "Spinning Studio", "Sauna Seca & Ãšmida", "NutriÃ§Ã£o Integrada", "Estacionamento com Manobrista"],
    featured: true
  },
  {
    id: 12,
    name: "VÃ©rtice Moema Ãndios",
    region: "Capital - Zona Sul",
    address: "Av. Jandira, 450 - Moema, SÃ£o Paulo - SP",
    cep: "04080-002",
    lat: -23.6090,
    lng: -46.6630,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 5055-4012",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Aulas Coletivas", "VestiÃ¡rio Climatizado"]
  },
  {
    id: 13,
    name: "VÃ©rtice Itaim Bibi",
    region: "Capital - Zona Sul",
    address: "Rua Joaquim Floriano, 733 - Itaim Bibi, SÃ£o Paulo - SP",
    cep: "04534-012",
    lat: -23.5845,
    lng: -46.6765,
    hoursWeek: "05:30 Ã s 23:30",
    hoursWeekend: "08:00 Ã s 19:00",
    phone: "(11) 3078-4013",
    amenities: ["MusculaÃ§Ã£o Importada", "Ãrea Recovery", "Sauna", "Estacionamento Coberto", "Sala de Spinning Imersiva"],
    featured: true
  },
  {
    id: 14,
    name: "VÃ©rtice Vila OlÃ­mpia",
    region: "Capital - Zona Sul",
    address: "Rua Funchal, 418 - Vila OlÃ­mpia, SÃ£o Paulo - SP",
    cep: "04551-060",
    lat: -23.5930,
    lng: -46.6890,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3845-4014",
    amenities: ["MusculaÃ§Ã£o", "Cardio PanorÃ¢mico", "Coworking Fit", "Lounge com ProteÃ­na"]
  },
  {
    id: 15,
    name: "VÃ©rtice Vila Mariana",
    region: "Capital - Zona Sul",
    address: "Rua Domingos de Morais, 2187 - Vila Mariana, SÃ£o Paulo - SP",
    cep: "04035-000",
    lat: -23.5910,
    lng: -46.6385,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 5571-4015",
    amenities: ["MusculaÃ§Ã£o", "Cross VÃ©rtice", "Ãrea Funcional", "Acesso MetrÃ´ Integrado"]
  },
  {
    id: 16,
    name: "VÃ©rtice Brooklin",
    region: "Capital - Zona Sul",
    address: "Av. Padre AntÃ´nio JosÃ© dos Santos, 1120 - Brooklin, SÃ£o Paulo - SP",
    cep: "04563-003",
    lat: -23.6120,
    lng: -46.6870,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 5506-4016",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Spinning", "VestiÃ¡rios Premium"]
  },
  {
    id: 17,
    name: "VÃ©rtice Campo Belo",
    region: "Capital - Zona Sul",
    address: "Rua Vieira de Morais, 890 - Campo Belo, SÃ£o Paulo - SP",
    cep: "04617-002",
    lat: -23.6190,
    lng: -46.6740,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 5041-4017",
    amenities: ["MusculaÃ§Ã£o", "Pilates", "Cardio", "Estacionamento"]
  },
  {
    id: 18,
    name: "VÃ©rtice Morumbi Nobre",
    region: "Capital - Zona Sul",
    address: "Av. Giovanni Gronchi, 3100 - Morumbi, SÃ£o Paulo - SP",
    cep: "05724-001",
    lat: -23.6145,
    lng: -46.7260,
    hoursWeek: "05:30 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3744-4018",
    amenities: ["MusculaÃ§Ã£o", "Ãrea Externa Funcional", "Piscina Aquecida", "Sauna", "Estacionamento com Manobrista"]
  },
  {
    id: 19,
    name: "VÃ©rtice Panamby",
    region: "Capital - Zona Sul",
    address: "Rua Dep. LaÃ©rcio Corte, 800 - Panamby, SÃ£o Paulo - SP",
    cep: "05706-290",
    lat: -23.6260,
    lng: -46.7190,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 3772-4019",
    amenities: ["MusculaÃ§Ã£o BiomecÃ¢nica", "Recovery Studio", "VestiÃ¡rio VIP", "CafÃ© Gourmet"]
  },
  {
    id: 20,
    name: "VÃ©rtice Santo Amaro",
    region: "Capital - Zona Sul",
    address: "Av. Adolfo Pinheiro, 1600 - Santo Amaro, SÃ£o Paulo - SP",
    cep: "04734-003",
    lat: -23.6490,
    lng: -46.7020,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 5686-4020",
    amenities: ["MusculaÃ§Ã£o 1.800mÂ²", "Box Funcional", "Cardio 40 Esteiras", "Lanchonete Fit"]
  },
  {
    id: 21,
    name: "VÃ©rtice ChÃ¡cara Santo AntÃ´nio",
    region: "Capital - Zona Sul",
    address: "Rua AmÃ©rico Brasiliense, 1850 - ChÃ¡cara Santo AntÃ´nio, SÃ£o Paulo - SP",
    cep: "04715-004",
    lat: -23.6350,
    lng: -46.6980,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 5181-4021",
    amenities: ["MusculaÃ§Ã£o", "Ãrea de Peso Livre", "Spinning Studio", "Estacionamento"]
  },
  {
    id: 22,
    name: "VÃ©rtice Jabaquara",
    region: "Capital - Zona Sul",
    address: "Av. Engenheiro Armando de Arruda Pereira, 2100 - Jabaquara, SÃ£o Paulo - SP",
    cep: "04308-001",
    lat: -23.6480,
    lng: -46.6410,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 5012-4022",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "GinÃ¡stica Coletiva", "Acesso TotalPass"]
  },
  {
    id: 23,
    name: "VÃ©rtice SaÃºde - Plaza",
    region: "Capital - Zona Sul",
    address: "Av. Jabaquara, 1550 - SaÃºde, SÃ£o Paulo - SP",
    cep: "04045-002",
    lat: -23.6150,
    lng: -46.6380,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 5584-4023",
    amenities: ["MusculaÃ§Ã£o", "Spinning", "Cardio Conectado", "ArmÃ¡rios BiomÃ©tricos"]
  },
  {
    id: 24,
    name: "VÃ©rtice Interlagos AutÃ³dromo",
    region: "Capital - Zona Sul",
    address: "Av. Interlagos, 2800 - Interlagos, SÃ£o Paulo - SP",
    cep: "04660-004",
    lat: -23.6820,
    lng: -46.6910,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 5631-4024",
    amenities: ["MusculaÃ§Ã£o 2.000mÂ²", "Box Crossfit Integrado", "Pista de Pneu", "Estacionamento Amplo"]
  },
  {
    id: 25,
    name: "VÃ©rtice Ipiranga HistÃ³rico",
    region: "Capital - Zona Sul",
    address: "Rua Silva Bueno, 1500 - Ipiranga, SÃ£o Paulo - SP",
    cep: "04208-001",
    lat: -23.5930,
    lng: -46.6020,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 2063-4025",
    amenities: ["MusculaÃ§Ã£o", "Ãrea Funcional", "Lutas & Boxe", "VestiÃ¡rios Modernos"]
  },

  // --- SÃƒO PAULO CAPITAL: ZONA OESTE (26-38) ---
  {
    id: 26,
    name: "VÃ©rtice Jardins Oscar Freire",
    region: "Capital - Zona Oeste",
    address: "Rua Oscar Freire, 1025 - Jardins, SÃ£o Paulo - SP",
    cep: "01426-001",
    lat: -23.5620,
    lng: -46.6690,
    hoursWeek: "05:30 Ã s 23:30",
    hoursWeekend: "08:00 Ã s 19:00",
    phone: "(11) 3081-4026",
    amenities: ["Equipamentos de Luxo", "Ãrea de Crioterapia", "Sauna Finlandesa", "Personal Concierge", "Valet Cortesia"],
    featured: true
  },
  {
    id: 27,
    name: "VÃ©rtice Pinheiros Faria Lima",
    region: "Capital - Zona Oeste",
    address: "Av. Brigadeiro Faria Lima, 2229 - Pinheiros, SÃ£o Paulo - SP",
    cep: "01452-000",
    lat: -23.5710,
    lng: -46.6885,
    hoursWeek: "05:30 Ã s 23:30",
    hoursWeekend: "08:00 Ã s 19:00",
    phone: "(11) 3812-4027",
    amenities: ["MusculaÃ§Ã£o High-Tech", "Cardio com Streaming", "VestiÃ¡rio Executive", "Estacionamento com Carregador EV"]
  },
  {
    id: 28,
    name: "VÃ©rtice Vila Madalena",
    region: "Capital - Zona Oeste",
    address: "Rua Fradique Coutinho, 1140 - Vila Madalena, SÃ£o Paulo - SP",
    cep: "05416-001",
    lat: -23.5570,
    lng: -46.6910,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3032-4028",
    amenities: ["MusculaÃ§Ã£o", "Ãrea Rooftop Funcional", "Yoga & Mobilidade", "Bar SaudÃ¡vel"]
  },
  {
    id: 29,
    name: "VÃ©rtice Perdizes Pompeia",
    region: "Capital - Zona Oeste",
    address: "Av. Pompeia, 1500 - Perdizes, SÃ£o Paulo - SP",
    cep: "05022-001",
    lat: -23.5350,
    lng: -46.6850,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3871-4029",
    amenities: ["MusculaÃ§Ã£o 1.500mÂ²", "Cardio PanorÃ¢mico", "Spinning Cinema", "Estacionamento"]
  },
  {
    id: 30,
    name: "VÃ©rtice Perdizes Cardoso de Almeida",
    region: "Capital - Zona Oeste",
    address: "Rua Cardoso de Almeida, 800 - Perdizes, SÃ£o Paulo - SP",
    cep: "05013-000",
    lat: -23.5390,
    lng: -46.6690,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 3865-4030",
    amenities: ["MusculaÃ§Ã£o", "Ãrea Peso Livre", "Alongamento Guiado", "VestiÃ¡rios VIP"]
  },
  {
    id: 31,
    name: "VÃ©rtice Lapa Comercial",
    region: "Capital - Zona Oeste",
    address: "Rua Doze de Outubro, 560 - Lapa, SÃ£o Paulo - SP",
    cep: "05073-001",
    lat: -23.5220,
    lng: -46.7050,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 3831-4031",
    amenities: ["MusculaÃ§Ã£o", "Cardio Completo", "Cross Training", "ArmÃ¡rios Seguros"]
  },
  {
    id: 32,
    name: "VÃ©rtice Alto de Pinheiros",
    region: "Capital - Zona Oeste",
    address: "Av. DiÃ³genes Ribeiro de Lima, 2100 - Alto de Pinheiros, SÃ£o Paulo - SP",
    cep: "05458-001",
    lat: -23.5480,
    lng: -46.7110,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3021-4032",
    amenities: ["MusculaÃ§Ã£o Premium", "Vista PanorÃ¢mica", "VestiÃ¡rios Climatizados", "Estacionamento"]
  },
  {
    id: 33,
    name: "VÃ©rtice ButantÃ£ USP",
    region: "Capital - Zona Oeste",
    address: "Av. Vital Brasil, 1050 - ButantÃ£, SÃ£o Paulo - SP",
    cep: "05503-000",
    lat: -23.5710,
    lng: -46.7090,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 3815-4033",
    amenities: ["MusculaÃ§Ã£o", "Cardio 30 Aparelhos", "Treino Funcional", "BicicletÃ¡rio Amplo"]
  },
  {
    id: 34,
    name: "VÃ©rtice Vila Leopoldina",
    region: "Capital - Zona Oeste",
    address: "Rua Carlos Weber, 900 - Vila Leopoldina, SÃ£o Paulo - SP",
    cep: "05303-000",
    lat: -23.5300,
    lng: -46.7260,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 3834-4034",
    amenities: ["MusculaÃ§Ã£o", "Ãrea de ForÃ§a Livre", "Recovery", "Estacionamento PrÃ³prio"]
  },
  {
    id: 35,
    name: "VÃ©rtice Barra Funda",
    region: "Capital - Zona Oeste",
    address: "Av. MarquÃªs de SÃ£o Vicente, 1619 - Barra Funda, SÃ£o Paulo - SP",
    cep: "01139-003",
    lat: -23.5180,
    lng: -46.6710,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 3611-4035",
    amenities: ["MusculaÃ§Ã£o 1.700mÂ²", "EspaÃ§o Lutas", "Cardio High-Tech", "TotalPass"]
  },
  {
    id: 36,
    name: "VÃ©rtice Raposo Tavares",
    region: "Capital - Zona Oeste",
    address: "Rod. Raposo Tavares, Km 14,5 - ButantÃ£, SÃ£o Paulo - SP",
    cep: "05576-000",
    lat: -23.5850,
    lng: -46.7450,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 3781-4036",
    amenities: ["MusculaÃ§Ã£o", "Estacionamento Amplo", "Cardio", "Aulas de Ritmos"]
  },
  {
    id: 37,
    name: "VÃ©rtice Pacaembu",
    region: "Capital - Zona Oeste",
    address: "Av. Pacaembu, 1300 - Pacaembu, SÃ£o Paulo - SP",
    cep: "01234-001",
    lat: -23.5370,
    lng: -46.6620,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 3661-4037",
    amenities: ["MusculaÃ§Ã£o BiomecÃ¢nica", "Pilates ClÃ­nico", "Sauna Seca", "Valet"]
  },
  {
    id: 38,
    name: "VÃ©rtice JaguarÃ©",
    region: "Capital - Zona Oeste",
    address: "Av. JaguarÃ©, 850 - JaguarÃ©, SÃ£o Paulo - SP",
    cep: "05346-000",
    lat: -23.5410,
    lng: -46.7430,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 3719-4038",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Box Funcional", "Estacionamento"]
  },

  // --- SÃƒO PAULO CAPITAL: ZONA LESTE (39-50) ---
  {
    id: 39,
    name: "VÃ©rtice TatuapÃ© AnÃ¡lia Franco",
    region: "Capital - Zona Leste",
    address: "Rua EmÃ­lia Marengo, 890 - TatuapÃ©, SÃ£o Paulo - SP",
    cep: "03336-000",
    lat: -23.5510,
    lng: -46.5670,
    hoursWeek: "05:30 Ã s 23:30",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 2671-4039",
    amenities: ["MusculaÃ§Ã£o 2.200mÂ²", "Cardio Cinema", "Sauna & Spa", "Ãrea Kids", "Estacionamento com Manobrista"],
    featured: true
  },
  {
    id: 40,
    name: "VÃ©rtice TatuapÃ© Radial",
    region: "Capital - Zona Leste",
    address: "Rua Tuiuti, 1800 - TatuapÃ©, SÃ£o Paulo - SP",
    cep: "03081-000",
    lat: -23.5400,
    lng: -46.5770,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 2091-4040",
    amenities: ["MusculaÃ§Ã£o", "Spinning Studio", "Cardio Conectado", "VestiÃ¡rios Modernos"]
  },
  {
    id: 41,
    name: "VÃ©rtice Mooca Paes de Barros",
    region: "Capital - Zona Leste",
    address: "Av. Paes de Barros, 1950 - Mooca, SÃ£o Paulo - SP",
    cep: "03115-001",
    lat: -23.5680,
    lng: -46.5910,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 2605-4041",
    amenities: ["MusculaÃ§Ã£o Pesada", "Ãrea de Powerlifting", "Cardio", "Estacionamento"]
  },
  {
    id: 42,
    name: "VÃ©rtice Mooca Juventus",
    region: "Capital - Zona Leste",
    address: "Rua Juventus, 420 - Mooca, SÃ£o Paulo - SP",
    cep: "03124-020",
    lat: -23.5750,
    lng: -46.5980,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 2272-4042",
    amenities: ["MusculaÃ§Ã£o", "Cross Training", "Pilates", "VestiÃ¡rios VIP"]
  },
  {
    id: 43,
    name: "VÃ©rtice Vila Prudente",
    region: "Capital - Zona Leste",
    address: "Av. Zelina, 780 - Vila Prudente, SÃ£o Paulo - SP",
    cep: "03143-001",
    lat: -23.5870,
    lng: -46.5820,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 2341-4043",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Treinamento Funcional", "Acesso TotalPass"]
  },
  {
    id: 44,
    name: "VÃ©rtice Penha Centro",
    region: "Capital - Zona Leste",
    address: "Rua Padre JoÃ£o, 350 - Penha, SÃ£o Paulo - SP",
    cep: "03637-000",
    lat: -23.5280,
    lng: -46.5460,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 2642-4044",
    amenities: ["MusculaÃ§Ã£o", "Box de Lutas", "Cardio", "ArmÃ¡rios BiomÃ©tricos"]
  },
  {
    id: 45,
    name: "VÃ©rtice BelÃ©m MetrÃ´",
    region: "Capital - Zona Leste",
    address: "Rua Toledo Barbosa, 410 - BelÃ©m, SÃ£o Paulo - SP",
    cep: "03061-000",
    lat: -23.5420,
    lng: -46.5940,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 2292-4045",
    amenities: ["MusculaÃ§Ã£o", "Cardio Conectado", "VestiÃ¡rio Climatizado", "BicicletÃ¡rio"]
  },
  {
    id: 46,
    name: "VÃ©rtice Vila Formosa",
    region: "Capital - Zona Leste",
    address: "PraÃ§a Sampaio Vidal, 220 - Vila Formosa, SÃ£o Paulo - SP",
    cep: "03356-000",
    lat: -23.5650,
    lng: -46.5490,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 2781-4046",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Aulas Coletivas", "Estacionamento"]
  },
  {
    id: 47,
    name: "VÃ©rtice Itaquera Arena",
    region: "Capital - Zona Leste",
    address: "Av. Radial Leste, 3200 - Itaquera, SÃ£o Paulo - SP",
    cep: "08220-000",
    lat: -23.5430,
    lng: -46.4710,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 2056-4047",
    amenities: ["MusculaÃ§Ã£o 1.800mÂ²", "Cross VÃ©rtice", "Pista de Corrida Interna", "Estacionamento Amplo"]
  },
  {
    id: 48,
    name: "VÃ©rtice SÃ£o Miguel Paulista",
    region: "Capital - Zona Leste",
    address: "Rua Marechal Tito, 1500 - SÃ£o Miguel, SÃ£o Paulo - SP",
    cep: "08010-000",
    lat: -23.4980,
    lng: -46.4420,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 15:00",
    phone: "(11) 2031-4048",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "GinÃ¡stica", "Acesso TotalPass"]
  },
  {
    id: 49,
    name: "VÃ©rtice Artur Alvim",
    region: "Capital - Zona Leste",
    address: "Rua Maciel Monteiro, 640 - Artur Alvim, SÃ£o Paulo - SP",
    cep: "03566-000",
    lat: -23.5390,
    lng: -46.4880,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 15:00",
    phone: "(11) 2741-4049",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "VestiÃ¡rios", "ArmÃ¡rios"]
  },
  {
    id: 50,
    name: "VÃ©rtice Sapopemba",
    region: "Capital - Zona Leste",
    address: "Av. Sapopemba, 6500 - Sapopemba, SÃ£o Paulo - SP",
    cep: "03988-000",
    lat: -23.6020,
    lng: -46.5250,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 15:00",
    phone: "(11) 2702-4050",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Treinamento Funcional", "Estacionamento"]
  },

  // --- SÃƒO PAULO CAPITAL: ZONA NORTE (51-60) ---
  {
    id: 51,
    name: "VÃ©rtice Santana Jardim SÃ£o Paulo",
    region: "Capital - Zona Norte",
    address: "Rua Pedro Doll, 450 - Santana, SÃ£o Paulo - SP",
    cep: "02404-001",
    lat: -23.4950,
    lng: -46.6320,
    hoursWeek: "05:30 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 2977-4051",
    amenities: ["MusculaÃ§Ã£o BiomecÃ¢nica", "Spinning Imersivo", "Sauna", "VestiÃ¡rio VIP", "Estacionamento com Valet"],
    featured: true
  },
  {
    id: 52,
    name: "VÃ©rtice Santana VoluntÃ¡rios",
    region: "Capital - Zona Norte",
    address: "Rua VoluntÃ¡rios da PÃ¡tria, 2800 - Santana, SÃ£o Paulo - SP",
    cep: "02010-200",
    lat: -23.5020,
    lng: -46.6270,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 2281-4052",
    amenities: ["MusculaÃ§Ã£o 1.600mÂ²", "Cardio", "Ãrea Funcional", "Acesso TotalPass"]
  },
  {
    id: 53,
    name: "VÃ©rtice Tucuruvi Shopping",
    region: "Capital - Zona Norte",
    address: "Av. Dr. AntÃ´nio Maria Laet, 560 - Tucuruvi, SÃ£o Paulo - SP",
    cep: "02240-000",
    lat: -23.4790,
    lng: -46.6040,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 2952-4053",
    amenities: ["MusculaÃ§Ã£o", "Cardio High-Tech", "Estacionamento Coberto", "VestiÃ¡rios Climatizados"]
  },
  {
    id: 54,
    name: "VÃ©rtice Casa Verde",
    region: "Capital - Zona Norte",
    address: "Av. Braz Leme, 1700 - Casa Verde, SÃ£o Paulo - SP",
    cep: "02511-000",
    lat: -23.5080,
    lng: -46.6540,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3858-4054",
    amenities: ["MusculaÃ§Ã£o", "Cardio com Vista", "Pista Funcional Externa", "Estacionamento"]
  },
  {
    id: 55,
    name: "VÃ©rtice Vila Guilherme Center",
    region: "Capital - Zona Norte",
    address: "Rua Maria CÃ¢ndida, 1200 - Vila Guilherme, SÃ£o Paulo - SP",
    cep: "02071-012",
    lat: -23.5130,
    lng: -46.6080,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 2901-4055",
    amenities: ["MusculaÃ§Ã£o", "Cross Training", "Cardio", "ArmÃ¡rios BiomÃ©tricos"]
  },
  {
    id: 56,
    name: "VÃ©rtice Mandaqui",
    region: "Capital - Zona Norte",
    address: "Av. Eng. Caetano Ãlvares, 4100 - Mandaqui, SÃ£o Paulo - SP",
    cep: "02413-000",
    lat: -23.4880,
    lng: -46.6490,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 2236-4056",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Aulas Coletivas", "Estacionamento GrÃ¡tis"]
  },
  {
    id: 57,
    name: "VÃ©rtice TremembÃ© Serra",
    region: "Capital - Zona Norte",
    address: "Av. Nova Cantareira, 3800 - TremembÃ©, SÃ£o Paulo - SP",
    cep: "02340-001",
    lat: -23.4650,
    lng: -46.6180,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 2203-4057",
    amenities: ["MusculaÃ§Ã£o", "Ãrea Funcional", "BicicletÃ¡rio Seguro", "CafÃ© SaudÃ¡vel"]
  },
  {
    id: 58,
    name: "VÃ©rtice Freguesia do Ã“",
    region: "Capital - Zona Norte",
    address: "Av. Itaberaba, 1900 - Freguesia do Ã“, SÃ£o Paulo - SP",
    cep: "02734-000",
    lat: -23.4980,
    lng: -46.6970,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 3931-4058",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "GinÃ¡stica", "Estacionamento"]
  },
  {
    id: 59,
    name: "VÃ©rtice LimÃ£o",
    region: "Capital - Zona Norte",
    address: "Av. Dep. EmÃ­lio Carlos, 950 - LimÃ£o, SÃ£o Paulo - SP",
    cep: "02720-000",
    lat: -23.5040,
    lng: -46.6780,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 15:00",
    phone: "(11) 3966-4059",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Box Funcional", "VestiÃ¡rios Climatizados"]
  },
  {
    id: 60,
    name: "VÃ©rtice JaÃ§anÃ£",
    region: "Capital - Zona Norte",
    address: "Rua Benjamim Pereira, 520 - JaÃ§anÃ£, SÃ£o Paulo - SP",
    cep: "02274-000",
    lat: -23.4680,
    lng: -46.5880,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 15:00",
    phone: "(11) 2241-4060",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Treinamento em Grupo", "Acesso TotalPass"]
  },

  // --- GRANDE SÃƒO PAULO / ABC / METROPOLITANA (61-72) ---
  {
    id: 61,
    name: "VÃ©rtice Santo AndrÃ© Jardim",
    region: "Grande SP - ABC",
    address: "Rua das Figueiras, 1100 - Bairro Jardim, Santo AndrÃ© - SP",
    cep: "09080-300",
    lat: -23.6520,
    lng: -46.5410,
    hoursWeek: "05:30 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 4436-4061",
    amenities: ["MusculaÃ§Ã£o BiomecÃ¢nica", "Spinning", "Sauna", "VestiÃ¡rios VIP", "Estacionamento com Manobrista"]
  },
  {
    id: 62,
    name: "VÃ©rtice Santo AndrÃ© Centro",
    region: "Grande SP - ABC",
    address: "Rua General GlicÃ©rio, 450 - Centro, Santo AndrÃ© - SP",
    cep: "09015-190",
    lat: -23.6590,
    lng: -46.5310,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 4992-4062",
    amenities: ["MusculaÃ§Ã£o 1.400mÂ²", "Cardio", "Cross Training", "Acesso TotalPass"]
  },
  {
    id: 63,
    name: "VÃ©rtice SÃ£o Bernardo Kennedy",
    region: "Grande SP - ABC",
    address: "Av. Kennedy, 1400 - Anchieta, SÃ£o Bernardo do Campo - SP",
    cep: "09726-253",
    lat: -23.6890,
    lng: -46.5540,
    hoursWeek: "05:30 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 4125-4063",
    amenities: ["MusculaÃ§Ã£o 2.000mÂ²", "Cardio High-End", "Recovery Lounge", "Estacionamento Amplo"]
  },
  {
    id: 64,
    name: "VÃ©rtice SÃ£o Bernardo Rudge Ramos",
    region: "Grande SP - ABC",
    address: "Av. Caminho do Mar, 2800 - Rudge Ramos, SÃ£o Bernardo do Campo - SP",
    cep: "09609-000",
    lat: -23.6680,
    lng: -46.5740,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 4368-4064",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Pilates Studio", "VestiÃ¡rios Modernos"]
  },
  {
    id: 65,
    name: "VÃ©rtice SÃ£o Caetano GoiÃ¡s",
    region: "Grande SP - ABC",
    address: "Av. GoiÃ¡s, 1850 - Santa Paula, SÃ£o Caetano do Sul - SP",
    cep: "09521-310",
    lat: -23.6190,
    lng: -46.5620,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 4224-4065",
    amenities: ["MusculaÃ§Ã£o Premium", "Spinning", "Sauna Finlandesa", "Estacionamento com Valet"]
  },
  {
    id: 66,
    name: "VÃ©rtice Diadema Centro",
    region: "Grande SP - ABC",
    address: "Av. FÃ¡bio Eduardo Ramos Esquivel, 850 - Centro, Diadema - SP",
    cep: "09920-570",
    lat: -23.6850,
    lng: -46.6190,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 4056-4066",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Box Funcional", "Acesso TotalPass"]
  },
  {
    id: 67,
    name: "VÃ©rtice MauÃ¡ Plaza",
    region: "Grande SP - ABC",
    address: "Av. Governador Mario Covas JÃºnior, 600 - Centro, MauÃ¡ - SP",
    cep: "09390-040",
    lat: -23.6680,
    lng: -46.4630,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 4547-4067",
    amenities: ["MusculaÃ§Ã£o 1.500mÂ²", "Cardio", "Aulas Coletivas", "Estacionamento"]
  },
  {
    id: 68,
    name: "VÃ©rtice Osasco Campesina",
    region: "Grande SP - Oeste/Norte",
    address: "Av. Franz Voegeli, 750 - Campesina, Osasco - SP",
    cep: "06020-190",
    lat: -23.5450,
    lng: -46.7720,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 3683-4068",
    amenities: ["MusculaÃ§Ã£o 1.800mÂ²", "Cardio", "Spinning", "Estacionamento GrÃ¡tis"]
  },
  {
    id: 69,
    name: "VÃ©rtice Alphaville Barueri",
    region: "Grande SP - Oeste/Norte",
    address: "Al. Rio Negro, 1030 - Alphaville Industrial, Barueri - SP",
    cep: "06454-000",
    lat: -23.5010,
    lng: -46.8520,
    hoursWeek: "05:30 Ã s 23:30",
    hoursWeekend: "08:00 Ã s 19:00",
    phone: "(11) 4195-4069",
    amenities: ["MusculaÃ§Ã£o BiomecÃ¢nica", "Recovery Cryo", "Sauna", "Valet Cortesia", "Lounge Executivo"],
    featured: true
  },
  {
    id: 70,
    name: "VÃ©rtice Guarulhos Maia",
    region: "Grande SP - Oeste/Norte",
    address: "Av. Paulo Faccini, 1600 - Bosque Maia, Guarulhos - SP",
    cep: "07115-260",
    lat: -23.4560,
    lng: -46.5280,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(11) 2440-4070",
    amenities: ["MusculaÃ§Ã£o 2.100mÂ²", "Cardio PanorÃ¢mico", "Spinning Studio", "Estacionamento Amplo"]
  },
  {
    id: 71,
    name: "VÃ©rtice Cotia Granja Viana",
    region: "Grande SP - Oeste/Norte",
    address: "Rod. Raposo Tavares, Km 22,5 - Granja Viana, Cotia - SP",
    cep: "06709-015",
    lat: -23.5930,
    lng: -46.8390,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 4702-4071",
    amenities: ["MusculaÃ§Ã£o", "Ãrea Verde Externa", "Pilates", "Estacionamento"]
  },
  {
    id: 72,
    name: "VÃ©rtice Mogi das Cruzes Centro",
    region: "Grande SP - Alto TietÃª",
    address: "Rua Coronel Souza Franco, 900 - Centro, Mogi das Cruzes - SP",
    cep: "08710-020",
    lat: -23.5240,
    lng: -46.1890,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(11) 4799-4072",
    amenities: ["MusculaÃ§Ã£o 1.600mÂ²", "Cardio", "Lutas", "Acesso TotalPass"]
  },

  // --- INTERIOR DE SÃƒO PAULO (73-83) ---
  {
    id: 73,
    name: "VÃ©rtice Campinas CambuÃ­",
    region: "Interior de SP",
    address: "Rua Coronel Quirino, 1550 - CambuÃ­, Campinas - SP",
    cep: "13025-002",
    lat: -22.8980,
    lng: -47.0540,
    hoursWeek: "05:30 Ã s 23:30",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(19) 3254-4073",
    amenities: ["MusculaÃ§Ã£o High-End", "Ãrea Recovery", "Sauna", "Valet", "Spinning Imersivo"],
    featured: true
  },
  {
    id: 74,
    name: "VÃ©rtice Campinas BarÃ£o Geraldo",
    region: "Interior de SP",
    address: "Av. Albino J. B. de Oliveira, 1300 - BarÃ£o Geraldo, Campinas - SP",
    cep: "13084-551",
    lat: -22.8250,
    lng: -47.0860,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(19) 3289-4074",
    amenities: ["MusculaÃ§Ã£o", "Cardio 40 Aparelhos", "Cross Training", "Estacionamento"]
  },
  {
    id: 75,
    name: "VÃ©rtice RibeirÃ£o Preto Fiusa",
    region: "Interior de SP",
    address: "Av. Prof. JoÃ£o FiÃºsa, 1800 - Alto da Boa Vista, RibeirÃ£o Preto - SP",
    cep: "14025-310",
    lat: -21.1960,
    lng: -47.8180,
    hoursWeek: "05:30 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(16) 3623-4075",
    amenities: ["MusculaÃ§Ã£o 2.300mÂ²", "Piscina Aquecida", "Sauna Ãšmida & Seca", "Estacionamento com Valet"]
  },
  {
    id: 76,
    name: "VÃ©rtice Sorocaba Campolim",
    region: "Interior de SP",
    address: "Av. AntÃ´nio Carlos Comitre, 950 - Parque Campolim, Sorocaba - SP",
    cep: "18047-620",
    lat: -23.5320,
    lng: -47.4650,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(15) 3234-4076",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Spinning Cinema", "Estacionamento GrÃ¡tis"]
  },
  {
    id: 77,
    name: "VÃ©rtice SÃ£o JosÃ© dos Campos Aquarius",
    region: "Interior de SP",
    address: "Av. Comendador Vicente de Paulo Penido, 450 - Jd. Aquarius, SÃ£o JosÃ© dos Campos - SP",
    cep: "12246-840",
    lat: -23.2180,
    lng: -45.9080,
    hoursWeek: "05:30 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 18:00",
    phone: "(12) 3922-4077",
    amenities: ["MusculaÃ§Ã£o Premium", "Cross VÃ©rtice", "Sauna", "Estacionamento"]
  },
  {
    id: 78,
    name: "VÃ©rtice JundiaÃ­ Nove de Julho",
    region: "Interior de SP",
    address: "Av. 9 de Julho, 2400 - Bela Vista, JundiaÃ­ - SP",
    cep: "13208-056",
    lat: -23.1920,
    lng: -46.8890,
    hoursWeek: "06:00 Ã s 23:00",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(11) 4586-4078",
    amenities: ["MusculaÃ§Ã£o 1.700mÂ²", "Cardio Conectado", "Pilates", "Estacionamento Amplo"]
  },
  {
    id: 79,
    name: "VÃ©rtice Piracicaba Centro",
    region: "Interior de SP",
    address: "Av. Torquato da Silva LeitÃ£o, 580 - SÃ£o Dimas, Piracicaba - SP",
    cep: "13416-015",
    lat: -22.7160,
    lng: -47.6490,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(19) 3434-4079",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Aulas Coletivas", "VestiÃ¡rios Climatizados"]
  },
  {
    id: 80,
    name: "VÃ©rtice Bauru NaÃ§Ãµes",
    region: "Interior de SP",
    address: "Av. NaÃ§Ãµes Unidas, 22-50 - Jardim Panorama, Bauru - SP",
    cep: "17011-105",
    lat: -22.3380,
    lng: -49.0680,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(14) 3227-4080",
    amenities: ["MusculaÃ§Ã£o 1.600mÂ²", "Cardio", "Box Funcional", "Estacionamento"]
  },
  {
    id: 81,
    name: "VÃ©rtice SÃ£o JosÃ© do Rio Preto Redentora",
    region: "Interior de SP",
    address: "Rua Silva Jardim, 3400 - Vila Redentora, SÃ£o JosÃ© do Rio Preto - SP",
    cep: "15015-060",
    lat: -20.8170,
    lng: -49.3850,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(17) 3233-4081",
    amenities: ["MusculaÃ§Ã£o BiomecÃ¢nica", "Spinning", "Sauna", "Estacionamento"]
  },
  {
    id: 82,
    name: "VÃ©rtice TaubatÃ© IndependÃªncia",
    region: "Interior de SP",
    address: "Av. IndependÃªncia, 1100 - IndependÃªncia, TaubatÃ© - SP",
    cep: "12031-000",
    lat: -23.0310,
    lng: -45.5680,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 15:00",
    phone: "(12) 3631-4082",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Treino Funcional", "Acesso TotalPass"]
  },
  {
    id: 83,
    name: "VÃ©rtice Limeira Centro",
    region: "Interior de SP",
    address: "Rua Carlos Gomes, 1250 - Centro, Limeira - SP",
    cep: "13480-011",
    lat: -22.5650,
    lng: -47.4040,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 15:00",
    phone: "(19) 3441-4083",
    amenities: ["MusculaÃ§Ã£o 1.500mÂ²", "Cardio", "VestiÃ¡rios", "ArmÃ¡rios BiomÃ©tricos"]
  },

  // --- LITORAL PAULISTA (84-89) ---
  {
    id: 84,
    name: "VÃ©rtice Santos Gonzaga Orla",
    region: "Litoral Paulista",
    address: "Av. Presidente Wilson, 55 - Gonzaga, Santos - SP",
    cep: "11055-000",
    lat: -23.9680,
    lng: -46.3330,
    hoursWeek: "05:30 Ã s 23:00",
    hoursWeekend: "07:30 Ã s 18:00",
    phone: "(13) 3284-4084",
    amenities: ["Vista Frontal para o Mar", "MusculaÃ§Ã£o BiomecÃ¢nica", "Spinning", "Sauna", "Valet Cortesia"],
    featured: true
  },
  {
    id: 85,
    name: "VÃ©rtice Santos Ponta da Praia",
    region: "Litoral Paulista",
    address: "Av. Almirante Saldanha da Gama, 140 - Ponta da Praia, Santos - SP",
    cep: "11030-401",
    lat: -23.9870,
    lng: -46.3050,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(13) 3261-4085",
    amenities: ["MusculaÃ§Ã£o 1.600mÂ²", "Cardio PanorÃ¢mico", "Recovery", "Estacionamento"]
  },
  {
    id: 86,
    name: "VÃ©rtice Praia Grande BoqueirÃ£o",
    region: "Litoral Paulista",
    address: "Av. Presidente Costa e Silva, 800 - BoqueirÃ£o, Praia Grande - SP",
    cep: "11701-000",
    lat: -24.0080,
    lng: -46.4110,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(13) 3491-4086",
    amenities: ["MusculaÃ§Ã£o 1.800mÂ²", "Cardio High-Tech", "Cross Funcional", "Estacionamento Amplo"]
  },
  {
    id: 87,
    name: "VÃ©rtice GuarujÃ¡ Pitangueiras",
    region: "Litoral Paulista",
    address: "Rua MÃ¡rio Ribeiro, 650 - Pitangueiras, GuarujÃ¡ - SP",
    cep: "11410-192",
    lat: -23.9930,
    lng: -46.2570,
    hoursWeek: "06:00 Ã s 22:30",
    hoursWeekend: "08:00 Ã s 17:00",
    phone: "(13) 3386-4087",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "VestiÃ¡rios Premium", "Acesso TotalPass"]
  },
  {
    id: 88,
    name: "VÃ©rtice GuarujÃ¡ Enseada",
    region: "Litoral Paulista",
    address: "Av. Dom Pedro I, 2100 - Enseada, GuarujÃ¡ - SP",
    cep: "11440-002",
    lat: -23.9850,
    lng: -46.2310,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(13) 3355-4088",
    amenities: ["MusculaÃ§Ã£o", "Cardio", "Ãrea Funcional", "Estacionamento GrÃ¡tis"]
  },
  {
    id: 89,
    name: "VÃ©rtice SÃ£o Vicente Centro",
    region: "Litoral Paulista",
    address: "Av. Presidente Wilson, 1200 - Centro, SÃ£o Vicente - SP",
    cep: "11320-000",
    lat: -23.9710,
    lng: -46.3760,
    hoursWeek: "06:00 Ã s 22:00",
    hoursWeekend: "08:00 Ã s 16:00",
    phone: "(13) 3468-4089",
    amenities: ["MusculaÃ§Ã£o", "Cardio Conectado", "Aulas Coletivas", "VestiÃ¡rios Climatizados"]
  }
];

// Tutoriais de ExercÃ­cios para os 9 Grupos Musculares Solicitados
const INITIAL_EXERCISES = [
  // 1. Peito
  {
    id: "ex-1",
    name: "Supino Reto com Barra",
    category: "Peito",
    machine: "Banco Reto OlÃ­mpico com Barra Guiada/Livre",
    targetMuscles: "Peitoral Maior, DeltÃ³ide Anterior, TrÃ­ceps Braquial",
    difficulty: "IntermediÃ¡rio",
    videoMock: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Deite-se no banco mantendo 5 pontos de contato: cabeÃ§a, parte superior das costas, glÃºteos e ambos os pÃ©s firmes no chÃ£o.",
      "Segure a barra com pegada ligeiramente mais larga que os ombros e realize uma retraÃ§Ã£o escapular ativa.",
      "Retire a barra do suporte e desÃ§a controladamente atÃ© tocar a linha mÃ©dia do esterno (peitoral).",
      "Empurre a barra verticalmente atÃ© a extensÃ£o dos cotovelos sem perder o travamento escapular."
    ],
    properPosture: "Mantenha o peito estufado, escÃ¡pulas aduzidas e pÃ©s cravados no piso durante todo o curso do movimento.",
    commonMistakes: "Tirar as nÃ¡degas do banco, rebater a barra contra o peito ou abrir os cotovelos a 90 graus (risco ao ombro).",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },
  {
    id: "ex-2",
    name: "Peck Deck / Voador",
    category: "Peito",
    machine: "MÃ¡quina Flye Articulada",
    targetMuscles: "Peitoral Maior (Feixe Esternocostal e Clavicular)",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajuste a altura do banco para que os apoios fiquem na linha do meio do peito.",
      "Mantenha cotovelos levemente flexionados e os ombros deprimidos para longe das orelhas.",
      "Aproxime as mÃ£os Ã  frente do peito sentindo o pico de contraÃ§Ã£o por 1 segundo.",
      "Retorne Ã  posiÃ§Ã£o inicial de forma lenta e controlada, sem deixar os pesos encostarem totalmente."
    ],
    properPosture: "Mantenha as escÃ¡pulas coladas no encosto e expire ao fechar os braÃ§os.",
    commonMistakes: "Jogar os ombros para frente no pico de contraÃ§Ã£o ou hiperextender os braÃ§os na abertura.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },

  // 2. Costas
  {
    id: "ex-3",
    name: "Puxada Alta na Barra (Lat Pulldown)",
    category: "Costas",
    machine: "Polia Alta com Barra Aberta",
    targetMuscles: "Grande Dorsal, Redondo Maior, BÃ­ceps, RombÃ³ides",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajuste os roletes da coxa para que suas pernas fiquem firmes e sem folga.",
      "Segure a barra com pegada pronada aberta e sente-se com a coluna alinhada.",
      "Inicie o movimento deprimindo as escÃ¡pulas antes de flexionar os cotovelos.",
      "Puxe a barra em direÃ§Ã£o Ã  parte superior do peito e retorne controlando a subida."
    ],
    properPosture: "Incline o tronco levemente para trÃ¡s (cerca de 10-15Â°), peito aberto e queixo neutro.",
    commonMistakes: "Puxar a barra atrÃ¡s da nuca, balanÃ§ar excessivamente o tronco ou puxar apenas com a forÃ§a dos braÃ§os.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },
  {
    id: "ex-4",
    name: "Remada Baixa no TriÃ¢ngulo",
    category: "Costas",
    machine: "Polia Baixa Sentada com Puxador V",
    targetMuscles: "Grande Dorsal, TrapÃ©zio MÃ©dio/Inferior, RombÃ³ides",
    difficulty: "IntermediÃ¡rio",
    videoMock: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Posicione os pÃ©s na plataforma com joelhos levemente destravados.",
      "Segure o pegador triangular com a coluna ereta e peito aberto.",
      "Puxe o pegador em direÃ§Ã£o ao abdÃ´men, unindo as escÃ¡pulas no final.",
      "Alongue as costas na volta controlando o retorno das placas de peso."
    ],
    properPosture: "Mantenha a curvatura lombar anatÃ´mica preservada sem arquear a coluna para frente.",
    commonMistakes: "Usar impulso lombar para iniciar a puxada ou deixar os ombros rolarem para a frente.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },

  // 3. Pernas
  {
    id: "ex-5",
    name: "Leg Press 45Â°",
    category: "Pernas",
    machine: "Plataforma de Leg Press 45 Graus Inclinada",
    targetMuscles: "QuadrÃ­ceps, GlÃºteos MÃ¡ximos, Isquiotibiais",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Acomode a coluna e o quadril totalmente apoiados no encosto sem folgas.",
      "Coloque os pÃ©s na largura dos ombros no meio da plataforma com pontas levemente para fora.",
      "Destrave a trava de seguranÃ§a segurando as alÃ§as laterais.",
      "Flexione os joelhos controladamente atÃ© atingir 90Â° e empurre com os calcanhares sem travar totalmente os joelhos no topo."
    ],
    properPosture: "Mantenha o quadril colado no banco durante toda a descida; nunca permita retroversÃ£o pÃ©lvica.",
    commonMistakes: "Descolar a lombar do encosto, valgo dinÃ¢mico (joelhos apontando para dentro) e estalar joelhos no final.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },
  {
    id: "ex-6",
    name: "Cadeira Extensora",
    category: "Pernas",
    machine: "Cadeira Extensora BiomecÃ¢nica",
    targetMuscles: "QuadrÃ­ceps (Reto Femoral, Vasto Lateral, Medial e IntermÃ©dio)",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajuste o encosto de modo que o eixo de rotaÃ§Ã£o da mÃ¡quina coincida com a linha dos seus joelhos.",
      "Posicione o rolo de espuma sobre a parte anterior dos tornozelos.",
      "Segure firme nos apoios laterais e estenda os joelhos atÃ© a contraÃ§Ã£o total dos quadrÃ­ceps.",
      "Segure 1 segundo no topo e desÃ§a com cadÃªncia lenta."
    ],
    properPosture: "Mantenha o tronco firme apoiado e nÃ£o balance o corpo para vencer a carga.",
    commonMistakes: "Ajustar o rolo nos dedos do pÃ© ou levantar o quadril da poltrona durante a extensÃ£o.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },

  // 4. Ombros
  {
    id: "ex-7",
    name: "ElevaÃ§Ã£o Lateral com Halteres",
    category: "Ombros",
    machine: "Halteres AnatÃ´micos de Uretano",
    targetMuscles: "DeltÃ³ide Lateral / Medial",
    difficulty: "IntermediÃ¡rio",
    videoMock: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Em pÃ©, com os pÃ©s na largura dos ombros e abdÃ´men contraÃ­do, segure um halter em cada mÃ£o.",
      "Mantenha uma leve flexÃ£o nos cotovelos e incline o tronco 5 graus Ã  frente.",
      "Eleve os braÃ§os lateralmente atÃ© a altura dos ombros, liderando o movimento pelos cotovelos.",
      "Controle a descida atÃ© quase tocar as coxas e repita."
    ],
    properPosture: "Evite encolher o pescoÃ§o (trapÃ©zio superior) e nÃ£o ultrapasse a linha do ombro.",
    commonMistakes: "Dar impulso com as pernas, dobrar os cotovelos em 90 graus ou jogar os braÃ§os muito para trÃ¡s.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },
  {
    id: "ex-8",
    name: "Desenvolvimento com Halteres Sentado",
    category: "Ombros",
    machine: "Banco com Encosto a 80-85Â°",
    targetMuscles: "DeltÃ³ide Anterior, Lateral, TrÃ­ceps",
    difficulty: "IntermediÃ¡rio",
    videoMock: "https://images.unsplash.com/photo-1584863265684-2631af21502e?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Sente-se com as costas apoiadas, pÃ©s cravados no solo e halteres na altura das orelhas.",
      "Mantenha os cotovelos posicionados ligeiramente Ã  frente do plano coronal (plano escapular).",
      "Empurre os halteres para cima de forma sincronizada atÃ© quase estender os braÃ§os.",
      "Retorne com controle atÃ© a altura dos ombros."
    ],
    properPosture: "Evite hiperextender a coluna lombar; mantenha o core contraÃ­do o tempo inteiro.",
    commonMistakes: "Bater os halteres no topo ou descer excessivamente forÃ§ando o manguito rotador.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },

  // 5. BÃ­ceps
  {
    id: "ex-9",
    name: "Rosca Scott na MÃ¡quina",
    category: "BÃ­ceps",
    machine: "Banco Scott com Barra W / Polia",
    targetMuscles: "BÃ­ceps Braquial, Braquial Anterior",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajuste a altura do banco para que suas axilas fiquem apoiadas no topo da almofada inclinada.",
      "Segure a barra com pegada supinada e braÃ§os estendidos (sem hiperextender os cotovelos).",
      "Flexione os cotovelos puxando o peso atÃ© a contraÃ§Ã£o mÃ¡xima do bÃ­ceps.",
      "DesÃ§a lentamente resistindo Ã  gravidade atÃ© 90% da extensÃ£o."
    ],
    properPosture: "Mantenha o peito colado no apoio e a cabeÃ§a alinhada com a coluna.",
    commonMistakes: "Tirar as axilas do apoio para aplicar alavanca ou esticar violentamente o cotovelo no fim.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },

  // 6. TrÃ­ceps
  {
    id: "ex-10",
    name: "TrÃ­ceps Pulley na Corda",
    category: "TrÃ­ceps",
    machine: "Cabo de Polia Alta com AcessÃ³rio de Corda",
    targetMuscles: "TrÃ­ceps Braquial (CabeÃ§a Lateral, Longa e Medial)",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Fique de frente para a polia alta, joelhos levemente flexionados e tronco inclinado cerca de 10Â°.",
      "Fixe os cotovelos nas laterais das costelas sem deixÃ¡-los oscilarem.",
      "Estenda os antebraÃ§os para baixo abrindo a corda para fora no ponto mais baixo.",
      "Retorne suavemente atÃ© que os antebraÃ§os formem um Ã¢ngulo de 90Â° com os braÃ§os."
    ],
    properPosture: "Ombros para trÃ¡s e para baixo, peito estufado e cotovelos travados na lateral do tronco.",
    commonMistakes: "Mover os cotovelos para frente e para trÃ¡s como se estivesse remando, ou usar o tronco.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },

  // 7. AbdÃ´men
  {
    id: "ex-11",
    name: "Abdominal na Polia Alta (Cable Crunch)",
    category: "AbdÃ´men",
    machine: "Polia Alta com Corda",
    targetMuscles: "Reto Abdominal e OblÃ­quos",
    difficulty: "IntermediÃ¡rio",
    videoMock: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajoelhe-se em frente Ã  polia segurando as pontas da corda na altura das orelhas.",
      "Mantenha o quadril fixo no lugar; o movimento deve vir exclusivamente da flexÃ£o da coluna.",
      "Enrole o tronco levando a cabeÃ§a em direÃ§Ã£o aos joelhos contraindo fortemente o abdÃ´men.",
      "Retorne Ã  posiÃ§Ã£o inicial de forma lenta mantendo a tensÃ£o na parede abdominal."
    ],
    properPosture: "NÃ£o sente nos calcanhares ao descer. O quadril age como um eixo estÃ¡tico.",
    commonMistakes: "Flexionar os quadris ao invÃ©s da coluna lombar/torÃ¡cica, transformando o exercÃ­cio em dobradiÃ§a.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },

  // 8. Cardio
  {
    id: "ex-12",
    name: "Simulador de Escada High-Performance",
    category: "Cardio",
    machine: "Climber / Escada ErgomÃ©trica Rotativa",
    targetMuscles: "Sistema Cardiovascular, GlÃºteos, Panturrilhas, QuadrÃ­ceps",
    difficulty: "AvanÃ§ado",
    videoMock: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Suba na mÃ¡quina antes de acionar a velocidade inicial de seguranÃ§a.",
      "Mantenha a postura ereta e olhe para a frente, nÃ£o para os seus pÃ©s.",
      "Pise com toda a planta do pÃ© no degrau, impulsionando pelo calcanhar para ativar glÃºteos.",
      "Mantenha as mÃ£os levemente apoiadas nas barras apenas para equilÃ­brio, sem descarregar o peso do corpo."
    ],
    properPosture: "Tronco ereto sem debruÃ§ar sobre o painel. Passadas firmes e cadenciadas.",
    commonMistakes: "Segurar firme e empurrar o corpo com os braÃ§os, retirando a carga das pernas e reduzindo o gasto calÃ³rico.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },

  // 9. GlÃºteos
  {
    id: "ex-13",
    name: "ElevaÃ§Ã£o PÃ©lvica com Barra / Hip Thrust",
    category: "GlÃºteos",
    machine: "MÃ¡quina Hip Thrust Dedicada ou Banco com Barra Acolchoada",
    targetMuscles: "GlÃºteo MÃ¡ximo, Isquiotibiais, Core",
    difficulty: "IntermediÃ¡rio",
    videoMock: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Apoie a linha inferior das escÃ¡pulas na borda do banco acolchoado.",
      "Posicione a barra sobre a linha do quadril com proteÃ§Ã£o de espuma.",
      "Deixe os pÃ©s na largura do quadril de modo que suas canelas fiquem verticais (90Â°) no ponto alto.",
      "Empurre o chÃ£o com os calcanhares e eleve o quadril atÃ© ficar paralelo ao solo, apertando os glÃºteos por 2 segundos."
    ],
    properPosture: "Mantenha o queixo apontado para o peito olhando para frente no topo; nÃ£o hiperestenda a lombar.",
    commonMistakes: "Olhar para o teto, arquear as costas excessivamente e posicionar os pÃ©s longe ou perto demais.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  },
  {
    id: "ex-14",
    name: "Cadeira Abdutora",
    category: "GlÃºteos",
    machine: "MÃ¡quina Abdutora Sentada",
    targetMuscles: "GlÃºteo MÃ©dio e GlÃºteo MÃ­nimo",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Acomode as costas no encosto e posicione a parte externa dos joelhos contra as almofadas.",
      "Selecione uma amplitude confortÃ¡vel e sem dor na articulaÃ§Ã£o do quadril.",
      "Abra as pernas controladamente atÃ© a contraÃ§Ã£o lateral mÃ¡xima.",
      "Retorne lentamente mantendo a tensÃ£o sem bater os pesos da torre."
    ],
    properPosture: "Costas bem apoiadas e pÃ©s relaxados sobre os suportes inferiores.",
    commonMistakes: "BalanÃ§ar as costas ou abrir e fechar as pernas rÃ¡pido demais sem cadÃªncia excÃªntrica.",
    safetyWarning: "Os tutoriais sÃ£o educativos. Em caso de dÃºvida, procure um profissional qualificado."
  }
];

// Personal Trainers Cadastrados para DiÃ¡rias
const INITIAL_PERSONALS = [
  {
    id: "pt-1",
    name: "Rodrigo MendonÃ§a, CREF 089214-G/SP",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    specialties: ["Hipertrofia Muscular", "BiomecÃ¢nica do Movimento", "PreparaÃ§Ã£o FÃ­sica"],
    experienceYears: 10,
    rating: 4.95,
    reviewsCount: 142,
    dailyRate: 150.00,
    gymsServedIds: [1, 2, 3, 11, 13, 26, 27],
    availableDays: ["Segunda", "TerÃ§a", "Quarta", "Quinta", "Sexta", "SÃ¡bado"],
    availableHours: ["06:00", "07:00", "08:00", "09:00", "18:00", "19:00", "20:00"],
    bio: "Especialista em biomecÃ¢nica aplicada e ganho expressivo de massa muscular sem dores articulares. Treinador de atletas de alta performance."
  },
  {
    id: "pt-2",
    name: "Camila Vasconcelos, CREF 104523-G/SP",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    specialties: ["Emagrecimento SaudÃ¡vel", "GlÃºteos & Pernas", "Condicionamento Feminino"],
    experienceYears: 8,
    rating: 4.98,
    reviewsCount: 189,
    dailyRate: 160.00,
    gymsServedIds: [11, 12, 13, 14, 15, 26, 39],
    availableDays: ["Segunda", "Quarta", "Quinta", "Sexta", "SÃ¡bado"],
    availableHours: ["07:00", "08:00", "10:00", "11:00", "17:00", "18:00", "19:00"],
    bio: "PÃ³s-graduada em Fisiologia do ExercÃ­cio pela USP. Metodologia focada em alta queima calÃ³rica e desenho muscular sem lesÃµes."
  },
  {
    id: "pt-3",
    name: "Lucas Alencar, CREF 072119-G/SP",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=80",
    specialties: ["ReabilitaÃ§Ã£o Postural", "Treino para Terceira Idade", "ForÃ§a Funcional"],
    experienceYears: 12,
    rating: 4.92,
    reviewsCount: 96,
    dailyRate: 140.00,
    gymsServedIds: [1, 4, 15, 29, 30, 51, 52],
    availableDays: ["Segunda", "TerÃ§a", "Quarta", "Quinta", "Sexta"],
    availableHours: ["08:00", "09:00", "14:00", "15:00", "16:00"],
    bio: "Fisioterapeuta e Educador FÃ­sico focado em alinhamento de coluna, alÃ­vio de lombalgia e fortalecimento seguro de articulaÃ§Ãµes."
  },
  {
    id: "pt-4",
    name: "Beatriz Nogueira, CREF 120485-G/SP",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    specialties: ["Cross Training", "HIIT & Queima RÃ¡pida", "ResistÃªncia Cardiovascular"],
    experienceYears: 6,
    rating: 4.89,
    reviewsCount: 110,
    dailyRate: 130.00,
    gymsServedIds: [24, 39, 40, 41, 61, 63, 73],
    availableDays: ["TerÃ§a", "Quinta", "Sexta", "SÃ¡bado", "Domingo"],
    availableHours: ["06:00", "07:00", "17:00", "18:00", "19:00", "20:00"],
    bio: "Treinos intensos, dinÃ¢micos e focados em superaÃ§Ã£o dos seus limites com alto padrÃ£o de tÃ©cnica."
  },
  {
    id: "pt-5",
    name: "Gabriel Santos, CREF 093847-G/SP",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    specialties: ["Powerlifting", "ForÃ§a Pura", "Ganho de Performance"],
    experienceYears: 9,
    rating: 4.97,
    reviewsCount: 164,
    dailyRate: 170.00,
    gymsServedIds: [1, 13, 27, 35, 68, 69, 73],
    availableDays: ["Segunda", "TerÃ§a", "Quarta", "Quinta", "Sexta"],
    availableHours: ["06:00", "07:00", "18:00", "19:00", "20:00", "21:00"],
    bio: "Recordista estadual de supino e agachamento. Especialista em tÃ©cnica impecÃ¡vel de movimentos bÃ¡sicos e quebra de platÃ´s de forÃ§a."
  }
];

// Clientes Demo Iniciais (com data de nascimento como senha padrÃ£o!)
const INITIAL_CLIENTS = [
  {
    id: "cli-1",
    name: "Carlos Eduardo Silva",
    email: "aluno@vertice.com.br",
    birthDate: "15/08/1995",
    password: "15081995", // Senha inicial = DDMMAAAA
    passwordChanged: false,
    phone: "(11) 98765-4321",
    cpf: "345.678.901-22",
    selectedGymId: 1, // VÃ©rtice Paulista Prime
    plan: "VÃ©rtice Anual Fidelity",
    monthlyPrice: 220.00,
    activeMonths: 8, // Faltam 4 meses para R$ 70,00!
    role: "client",
    status: "Ativo",
    memberSince: "15/01/2026",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "admin-1",
    name: "Administrador Master - VÃ©rtice",
    email: "admin@vertice.com.br",
    birthDate: "01/01/1988",
    password: "admin123",
    passwordChanged: true,
    phone: "(11) 3288-4000",
    cpf: "000.000.000-00",
    selectedGymId: 1,
    plan: "Master Admin Network",
    monthlyPrice: 0.00,
    activeMonths: 24,
    role: "admin",
    status: "Ativo",
    memberSince: "01/01/2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
  }
];

// PromoÃ§Ãµes Ativas
const INITIAL_PROMOTIONS = [
  {
    id: "promo-1",
    title: "Start VÃ©rtice 2026",
    subtitle: "Comece hoje seu treino na maior rede de SÃ£o Paulo",
    pricePromo: "R$ 149,90",
    period: "no 1Âº mÃªs",
    normalPrice: "Depois R$ 220,00/mÃªs",
    tag: "MAIS POPULAR",
    badge: "Economize R$ 70 no primeiro mÃªs",
    conditions: "VÃ¡lido para novas adesÃµes no plano anual. O tempo Ã© contabilizado normalmente para o Programa de Fidelidade de R$ 70,00/mÃªs a partir do 13Âº mÃªs."
  },
  {
    id: "promo-2",
    title: "MatrÃ­cula & AvaliaÃ§Ã£o Zero",
    subtitle: "AdesÃ£o 100% gratuita em qualquer uma das 89 unidades",
    pricePromo: "R$ 0,00",
    period: "taxa de matrÃ­cula",
    normalPrice: "De R$ 150,00 por ZERO",
    tag: "OFERTA LIMITADA",
    badge: "AdesÃ£o GrÃ¡tis",
    conditions: "IsenÃ§Ã£o total da taxa de matrÃ­cula e avaliaÃ§Ã£o mÃ©dica inicial 100% gratuita com agendamento online."
  },
  {
    id: "promo-3",
    title: "VÃ©rtice Duo - Traga um Amigo",
    subtitle: "Treinem juntos na mesma unidade ou em qualquer uma das 89",
    pricePromo: "50% OFF",
    period: "no 2Âº mÃªs para ambos",
    normalPrice: "Mensalidade regular R$ 220,00",
    tag: "AMIGOS DE TREINO",
    badge: "BÃ´nus Fidelidade",
    conditions: "Ao indicar um amigo que permaneÃ§a ativo, ambos ganham 50% de desconto na 2Âª mensalidade, sem interromper o ciclo do plano de fidelidade de 1 ano."
  }
];

// Agendamentos MÃ©dicos Iniciais
const INITIAL_MEDICAL_APPOINTMENTS = [
  {
    id: "med-1",
    clientId: "cli-1",
    gymId: 1,
    doctorName: "Dra. Renata Prado (Medicina Esportiva)",
    date: "2026-10-05",
    timeSlot: "10:30",
    status: "Confirmada",
    notes: "AvaliaÃ§Ã£o postural e anamnese cardiorrespiratÃ³ria gratuita.",
    price: 0.00
  }
];

// Agendamentos de Personal Iniciais
const INITIAL_PERSONAL_BOOKINGS = [
  {
    id: "pb-1",
    clientId: "cli-1",
    personalId: "pt-1",
    gymId: 1,
    date: "2026-10-03",
    timeSlot: "08:00",
    status: "Agendado",
    price: 150.00,
    receiptNumber: "VTC-PT-2026-0091"
  }
];

// HistÃ³rico de Pagamentos Inicial
const INITIAL_PAYMENTS = [
  {
    id: "pay-1",
    clientId: "cli-1",
    description: "Mensalidade VÃ©rtice Fitness - MÃªs 8",
    amount: 220.00,
    date: "15/09/2026",
    status: "Pago",
    method: "CartÃ£o de CrÃ©dito",
    invoice: "NF-89211"
  },
  {
    id: "pay-2",
    clientId: "cli-1",
    description: "DiÃ¡ria Personal Rodrigo MendonÃ§a",
    amount: 150.00,
    date: "20/09/2026",
    status: "Pago",
    method: "PIX",
    invoice: "REC-PT-0091"
  },
  {
    id: "pay-3",
    clientId: "cli-1",
    description: "Mensalidade VÃ©rtice Fitness - MÃªs 7",
    amount: 220.00,
    date: "15/08/2026",
    status: "Pago",
    method: "CartÃ£o de CrÃ©dito",
    invoice: "NF-85402"
  }
];

