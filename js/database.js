/**
 * VÉRTICE FITNESS - Banco de Dados Inicial e Estrutura de Armazenamento
 * Rede de 89 Academias em São Paulo
 * Paleta de Cores: Vinho (#7A1630), Preto (#0B0B0D), Azul-Marinho (#101C35)
 */

// Chaves de armazenamento no LocalStorage
export const STORAGE_KEYS = {
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

// 89 Unidades estruturadas pelo Estado de São Paulo
export const INITIAL_GYMS = [
  // --- SÃO PAULO CAPITAL: CENTRO & EXPANSÃO (1-10) ---
  {
    id: 1,
    name: "Vértice Paulista Prime",
    region: "Capital - Centro/Paulista",
    address: "Av. Paulista, 1842 - Bela Vista, São Paulo - SP",
    cep: "01310-200",
    lat: -23.5598,
    lng: -46.6582,
    hoursWeek: "05:30 às 23:30",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3288-4001",
    amenities: ["Musculação High-End", "Área Cardio Panorâmica", "Spinning Imersivo", "Sauna Seca", "Estacionamento Grátis", "Espaço Recovery"],
    featured: true
  },
  {
    id: 2,
    name: "Vértice Consolação",
    region: "Capital - Centro/Paulista",
    address: "Rua da Consolação, 2410 - Consolação, São Paulo - SP",
    cep: "01301-100",
    lat: -23.5532,
    lng: -46.6610,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 3120-4002",
    amenities: ["Musculação", "Cardio", "Box Funcional", "Vestiário com Secador", "Acesso TotalPass"]
  },
  {
    id: 3,
    name: "Vértice Higienópolis",
    region: "Capital - Centro/Paulista",
    address: "Rua Maranhão, 531 - Higienópolis, São Paulo - SP",
    cep: "01240-001",
    lat: -23.5460,
    lng: -46.6565,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3824-4003",
    amenities: ["Musculação Premium", "Pilates Studio", "Sauna a Vapor", "Vestiário VIP", "Valet"]
  },
  {
    id: 4,
    name: "Vértice Bela Vista - Brigadeiro",
    region: "Capital - Centro/Paulista",
    address: "Av. Brigadeiro Luís Antônio, 1200 - Bela Vista, São Paulo - SP",
    cep: "01318-001",
    lat: -23.5615,
    lng: -46.6478,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 3251-4004",
    amenities: ["Musculação", "Cardio", "Aulas Coletivas", "Armários com Biometria"]
  },
  {
    id: 5,
    name: "Vértice Liberdade",
    region: "Capital - Centro/Paulista",
    address: "Praça da Liberdade, 190 - Liberdade, São Paulo - SP",
    cep: "01503-010",
    lat: -23.5552,
    lng: -46.6358,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 3209-4005",
    amenities: ["Musculação", "Área Funcional", "Ducha Relaxante", "Wi-Fi 6 Ultra"]
  },
  {
    id: 6,
    name: "Vértice República Cultural",
    region: "Capital - Centro/Paulista",
    address: "Av. São João, 1150 - República, São Paulo - SP",
    cep: "01036-100",
    lat: -23.5412,
    lng: -46.6415,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "09:00 às 16:00",
    phone: "(11) 3331-4006",
    amenities: ["Musculação", "Ringue de Boxe", "Cardio", "Bicicletário Seguro"]
  },
  {
    id: 7,
    name: "Vértice Aclimação Park",
    region: "Capital - Centro/Paulista",
    address: "Rua Topázio, 380 - Aclimação, São Paulo - SP",
    cep: "04105-061",
    lat: -23.5732,
    lng: -46.6340,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 3277-4007",
    amenities: ["Musculação", "Pista de Aquecimento", "Spinning", "Espaço Shake"]
  },
  {
    id: 8,
    name: "Vértice Bom Retiro",
    region: "Capital - Centro/Paulista",
    address: "Rua José Paulino, 890 - Bom Retiro, São Paulo - SP",
    cep: "01120-000",
    lat: -23.5310,
    lng: -46.6390,
    hoursWeek: "06:30 às 22:00",
    hoursWeekend: "08:00 às 15:00",
    phone: "(11) 3361-4008",
    amenities: ["Musculação", "Área de Peso Livre Extra", "Cardio"]
  },
  {
    id: 9,
    name: "Vértice Santa Cecília",
    region: "Capital - Centro/Paulista",
    address: "Rua das Palmeiras, 215 - Santa Cecília, São Paulo - SP",
    cep: "01226-010",
    lat: -23.5385,
    lng: -46.6515,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 3662-4009",
    amenities: ["Musculação", "Cardio", "Cross Training", "Vestiários Climatizados"]
  },
  {
    id: 10,
    name: "Vértice Paraíso",
    region: "Capital - Centro/Paulista",
    address: "Rua Vergueiro, 1450 - Paraíso, São Paulo - SP",
    cep: "04101-000",
    lat: -23.5780,
    lng: -46.6405,
    hoursWeek: "05:30 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3884-4010",
    amenities: ["Musculação High-End", "Área Cardio", "Vestiário VIP", "Café Fit"]
  },

  // --- SÃO PAULO CAPITAL: ZONA SUL (11-25) ---
  {
    id: 11,
    name: "Vértice Moema Pássaros",
    region: "Capital - Zona Sul",
    address: "Av. Pavão, 620 - Moema, São Paulo - SP",
    cep: "04516-011",
    lat: -23.6025,
    lng: -46.6710,
    hoursWeek: "05:30 às 23:30",
    hoursWeekend: "08:00 às 19:00",
    phone: "(11) 5051-4011",
    amenities: ["Musculação Biomecânica", "Spinning Studio", "Sauna Seca & Úmida", "Nutrição Integrada", "Estacionamento com Manobrista"],
    featured: true
  },
  {
    id: 12,
    name: "Vértice Moema Índios",
    region: "Capital - Zona Sul",
    address: "Av. Jandira, 450 - Moema, São Paulo - SP",
    cep: "04080-002",
    lat: -23.6090,
    lng: -46.6630,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 5055-4012",
    amenities: ["Musculação", "Cardio", "Aulas Coletivas", "Vestiário Climatizado"]
  },
  {
    id: 13,
    name: "Vértice Itaim Bibi",
    region: "Capital - Zona Sul",
    address: "Rua Joaquim Floriano, 733 - Itaim Bibi, São Paulo - SP",
    cep: "04534-012",
    lat: -23.5845,
    lng: -46.6765,
    hoursWeek: "05:30 às 23:30",
    hoursWeekend: "08:00 às 19:00",
    phone: "(11) 3078-4013",
    amenities: ["Musculação Importada", "Área Recovery", "Sauna", "Estacionamento Coberto", "Sala de Spinning Imersiva"],
    featured: true
  },
  {
    id: 14,
    name: "Vértice Vila Olímpia",
    region: "Capital - Zona Sul",
    address: "Rua Funchal, 418 - Vila Olímpia, São Paulo - SP",
    cep: "04551-060",
    lat: -23.5930,
    lng: -46.6890,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3845-4014",
    amenities: ["Musculação", "Cardio Panorâmico", "Coworking Fit", "Lounge com Proteína"]
  },
  {
    id: 15,
    name: "Vértice Vila Mariana",
    region: "Capital - Zona Sul",
    address: "Rua Domingos de Morais, 2187 - Vila Mariana, São Paulo - SP",
    cep: "04035-000",
    lat: -23.5910,
    lng: -46.6385,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 5571-4015",
    amenities: ["Musculação", "Cross Vértice", "Área Funcional", "Acesso Metrô Integrado"]
  },
  {
    id: 16,
    name: "Vértice Brooklin",
    region: "Capital - Zona Sul",
    address: "Av. Padre Antônio José dos Santos, 1120 - Brooklin, São Paulo - SP",
    cep: "04563-003",
    lat: -23.6120,
    lng: -46.6870,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 5506-4016",
    amenities: ["Musculação", "Cardio", "Spinning", "Vestiários Premium"]
  },
  {
    id: 17,
    name: "Vértice Campo Belo",
    region: "Capital - Zona Sul",
    address: "Rua Vieira de Morais, 890 - Campo Belo, São Paulo - SP",
    cep: "04617-002",
    lat: -23.6190,
    lng: -46.6740,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 5041-4017",
    amenities: ["Musculação", "Pilates", "Cardio", "Estacionamento"]
  },
  {
    id: 18,
    name: "Vértice Morumbi Nobre",
    region: "Capital - Zona Sul",
    address: "Av. Giovanni Gronchi, 3100 - Morumbi, São Paulo - SP",
    cep: "05724-001",
    lat: -23.6145,
    lng: -46.7260,
    hoursWeek: "05:30 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3744-4018",
    amenities: ["Musculação", "Área Externa Funcional", "Piscina Aquecida", "Sauna", "Estacionamento com Manobrista"]
  },
  {
    id: 19,
    name: "Vértice Panamby",
    region: "Capital - Zona Sul",
    address: "Rua Dep. Laércio Corte, 800 - Panamby, São Paulo - SP",
    cep: "05706-290",
    lat: -23.6260,
    lng: -46.7190,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 3772-4019",
    amenities: ["Musculação Biomecânica", "Recovery Studio", "Vestiário VIP", "Café Gourmet"]
  },
  {
    id: 20,
    name: "Vértice Santo Amaro",
    region: "Capital - Zona Sul",
    address: "Av. Adolfo Pinheiro, 1600 - Santo Amaro, São Paulo - SP",
    cep: "04734-003",
    lat: -23.6490,
    lng: -46.7020,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 5686-4020",
    amenities: ["Musculação 1.800m²", "Box Funcional", "Cardio 40 Esteiras", "Lanchonete Fit"]
  },
  {
    id: 21,
    name: "Vértice Chácara Santo Antônio",
    region: "Capital - Zona Sul",
    address: "Rua Américo Brasiliense, 1850 - Chácara Santo Antônio, São Paulo - SP",
    cep: "04715-004",
    lat: -23.6350,
    lng: -46.6980,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 5181-4021",
    amenities: ["Musculação", "Área de Peso Livre", "Spinning Studio", "Estacionamento"]
  },
  {
    id: 22,
    name: "Vértice Jabaquara",
    region: "Capital - Zona Sul",
    address: "Av. Engenheiro Armando de Arruda Pereira, 2100 - Jabaquara, São Paulo - SP",
    cep: "04308-001",
    lat: -23.6480,
    lng: -46.6410,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 5012-4022",
    amenities: ["Musculação", "Cardio", "Ginástica Coletiva", "Acesso TotalPass"]
  },
  {
    id: 23,
    name: "Vértice Saúde - Plaza",
    region: "Capital - Zona Sul",
    address: "Av. Jabaquara, 1550 - Saúde, São Paulo - SP",
    cep: "04045-002",
    lat: -23.6150,
    lng: -46.6380,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 5584-4023",
    amenities: ["Musculação", "Spinning", "Cardio Conectado", "Armários Biométricos"]
  },
  {
    id: 24,
    name: "Vértice Interlagos Autódromo",
    region: "Capital - Zona Sul",
    address: "Av. Interlagos, 2800 - Interlagos, São Paulo - SP",
    cep: "04660-004",
    lat: -23.6820,
    lng: -46.6910,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 5631-4024",
    amenities: ["Musculação 2.000m²", "Box Crossfit Integrado", "Pista de Pneu", "Estacionamento Amplo"]
  },
  {
    id: 25,
    name: "Vértice Ipiranga Histórico",
    region: "Capital - Zona Sul",
    address: "Rua Silva Bueno, 1500 - Ipiranga, São Paulo - SP",
    cep: "04208-001",
    lat: -23.5930,
    lng: -46.6020,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 2063-4025",
    amenities: ["Musculação", "Área Funcional", "Lutas & Boxe", "Vestiários Modernos"]
  },

  // --- SÃO PAULO CAPITAL: ZONA OESTE (26-38) ---
  {
    id: 26,
    name: "Vértice Jardins Oscar Freire",
    region: "Capital - Zona Oeste",
    address: "Rua Oscar Freire, 1025 - Jardins, São Paulo - SP",
    cep: "01426-001",
    lat: -23.5620,
    lng: -46.6690,
    hoursWeek: "05:30 às 23:30",
    hoursWeekend: "08:00 às 19:00",
    phone: "(11) 3081-4026",
    amenities: ["Equipamentos de Luxo", "Área de Crioterapia", "Sauna Finlandesa", "Personal Concierge", "Valet Cortesia"],
    featured: true
  },
  {
    id: 27,
    name: "Vértice Pinheiros Faria Lima",
    region: "Capital - Zona Oeste",
    address: "Av. Brigadeiro Faria Lima, 2229 - Pinheiros, São Paulo - SP",
    cep: "01452-000",
    lat: -23.5710,
    lng: -46.6885,
    hoursWeek: "05:30 às 23:30",
    hoursWeekend: "08:00 às 19:00",
    phone: "(11) 3812-4027",
    amenities: ["Musculação High-Tech", "Cardio com Streaming", "Vestiário Executive", "Estacionamento com Carregador EV"]
  },
  {
    id: 28,
    name: "Vértice Vila Madalena",
    region: "Capital - Zona Oeste",
    address: "Rua Fradique Coutinho, 1140 - Vila Madalena, São Paulo - SP",
    cep: "05416-001",
    lat: -23.5570,
    lng: -46.6910,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3032-4028",
    amenities: ["Musculação", "Área Rooftop Funcional", "Yoga & Mobilidade", "Bar Saudável"]
  },
  {
    id: 29,
    name: "Vértice Perdizes Pompeia",
    region: "Capital - Zona Oeste",
    address: "Av. Pompeia, 1500 - Perdizes, São Paulo - SP",
    cep: "05022-001",
    lat: -23.5350,
    lng: -46.6850,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3871-4029",
    amenities: ["Musculação 1.500m²", "Cardio Panorâmico", "Spinning Cinema", "Estacionamento"]
  },
  {
    id: 30,
    name: "Vértice Perdizes Cardoso de Almeida",
    region: "Capital - Zona Oeste",
    address: "Rua Cardoso de Almeida, 800 - Perdizes, São Paulo - SP",
    cep: "05013-000",
    lat: -23.5390,
    lng: -46.6690,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 3865-4030",
    amenities: ["Musculação", "Área Peso Livre", "Alongamento Guiado", "Vestiários VIP"]
  },
  {
    id: 31,
    name: "Vértice Lapa Comercial",
    region: "Capital - Zona Oeste",
    address: "Rua Doze de Outubro, 560 - Lapa, São Paulo - SP",
    cep: "05073-001",
    lat: -23.5220,
    lng: -46.7050,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 3831-4031",
    amenities: ["Musculação", "Cardio Completo", "Cross Training", "Armários Seguros"]
  },
  {
    id: 32,
    name: "Vértice Alto de Pinheiros",
    region: "Capital - Zona Oeste",
    address: "Av. Diógenes Ribeiro de Lima, 2100 - Alto de Pinheiros, São Paulo - SP",
    cep: "05458-001",
    lat: -23.5480,
    lng: -46.7110,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3021-4032",
    amenities: ["Musculação Premium", "Vista Panorâmica", "Vestiários Climatizados", "Estacionamento"]
  },
  {
    id: 33,
    name: "Vértice Butantã USP",
    region: "Capital - Zona Oeste",
    address: "Av. Vital Brasil, 1050 - Butantã, São Paulo - SP",
    cep: "05503-000",
    lat: -23.5710,
    lng: -46.7090,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 3815-4033",
    amenities: ["Musculação", "Cardio 30 Aparelhos", "Treino Funcional", "Bicicletário Amplo"]
  },
  {
    id: 34,
    name: "Vértice Vila Leopoldina",
    region: "Capital - Zona Oeste",
    address: "Rua Carlos Weber, 900 - Vila Leopoldina, São Paulo - SP",
    cep: "05303-000",
    lat: -23.5300,
    lng: -46.7260,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 3834-4034",
    amenities: ["Musculação", "Área de Força Livre", "Recovery", "Estacionamento Próprio"]
  },
  {
    id: 35,
    name: "Vértice Barra Funda",
    region: "Capital - Zona Oeste",
    address: "Av. Marquês de São Vicente, 1619 - Barra Funda, São Paulo - SP",
    cep: "01139-003",
    lat: -23.5180,
    lng: -46.6710,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 3611-4035",
    amenities: ["Musculação 1.700m²", "Espaço Lutas", "Cardio High-Tech", "TotalPass"]
  },
  {
    id: 36,
    name: "Vértice Raposo Tavares",
    region: "Capital - Zona Oeste",
    address: "Rod. Raposo Tavares, Km 14,5 - Butantã, São Paulo - SP",
    cep: "05576-000",
    lat: -23.5850,
    lng: -46.7450,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 3781-4036",
    amenities: ["Musculação", "Estacionamento Amplo", "Cardio", "Aulas de Ritmos"]
  },
  {
    id: 37,
    name: "Vértice Pacaembu",
    region: "Capital - Zona Oeste",
    address: "Av. Pacaembu, 1300 - Pacaembu, São Paulo - SP",
    cep: "01234-001",
    lat: -23.5370,
    lng: -46.6620,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 3661-4037",
    amenities: ["Musculação Biomecânica", "Pilates Clínico", "Sauna Seca", "Valet"]
  },
  {
    id: 38,
    name: "Vértice Jaguaré",
    region: "Capital - Zona Oeste",
    address: "Av. Jaguaré, 850 - Jaguaré, São Paulo - SP",
    cep: "05346-000",
    lat: -23.5410,
    lng: -46.7430,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 3719-4038",
    amenities: ["Musculação", "Cardio", "Box Funcional", "Estacionamento"]
  },

  // --- SÃO PAULO CAPITAL: ZONA LESTE (39-50) ---
  {
    id: 39,
    name: "Vértice Tatuapé Anália Franco",
    region: "Capital - Zona Leste",
    address: "Rua Emília Marengo, 890 - Tatuapé, São Paulo - SP",
    cep: "03336-000",
    lat: -23.5510,
    lng: -46.5670,
    hoursWeek: "05:30 às 23:30",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 2671-4039",
    amenities: ["Musculação 2.200m²", "Cardio Cinema", "Sauna & Spa", "Área Kids", "Estacionamento com Manobrista"],
    featured: true
  },
  {
    id: 40,
    name: "Vértice Tatuapé Radial",
    region: "Capital - Zona Leste",
    address: "Rua Tuiuti, 1800 - Tatuapé, São Paulo - SP",
    cep: "03081-000",
    lat: -23.5400,
    lng: -46.5770,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 2091-4040",
    amenities: ["Musculação", "Spinning Studio", "Cardio Conectado", "Vestiários Modernos"]
  },
  {
    id: 41,
    name: "Vértice Mooca Paes de Barros",
    region: "Capital - Zona Leste",
    address: "Av. Paes de Barros, 1950 - Mooca, São Paulo - SP",
    cep: "03115-001",
    lat: -23.5680,
    lng: -46.5910,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 2605-4041",
    amenities: ["Musculação Pesada", "Área de Powerlifting", "Cardio", "Estacionamento"]
  },
  {
    id: 42,
    name: "Vértice Mooca Juventus",
    region: "Capital - Zona Leste",
    address: "Rua Juventus, 420 - Mooca, São Paulo - SP",
    cep: "03124-020",
    lat: -23.5750,
    lng: -46.5980,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 2272-4042",
    amenities: ["Musculação", "Cross Training", "Pilates", "Vestiários VIP"]
  },
  {
    id: 43,
    name: "Vértice Vila Prudente",
    region: "Capital - Zona Leste",
    address: "Av. Zelina, 780 - Vila Prudente, São Paulo - SP",
    cep: "03143-001",
    lat: -23.5870,
    lng: -46.5820,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 2341-4043",
    amenities: ["Musculação", "Cardio", "Treinamento Funcional", "Acesso TotalPass"]
  },
  {
    id: 44,
    name: "Vértice Penha Centro",
    region: "Capital - Zona Leste",
    address: "Rua Padre João, 350 - Penha, São Paulo - SP",
    cep: "03637-000",
    lat: -23.5280,
    lng: -46.5460,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 2642-4044",
    amenities: ["Musculação", "Box de Lutas", "Cardio", "Armários Biométricos"]
  },
  {
    id: 45,
    name: "Vértice Belém Metrô",
    region: "Capital - Zona Leste",
    address: "Rua Toledo Barbosa, 410 - Belém, São Paulo - SP",
    cep: "03061-000",
    lat: -23.5420,
    lng: -46.5940,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 2292-4045",
    amenities: ["Musculação", "Cardio Conectado", "Vestiário Climatizado", "Bicicletário"]
  },
  {
    id: 46,
    name: "Vértice Vila Formosa",
    region: "Capital - Zona Leste",
    address: "Praça Sampaio Vidal, 220 - Vila Formosa, São Paulo - SP",
    cep: "03356-000",
    lat: -23.5650,
    lng: -46.5490,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 2781-4046",
    amenities: ["Musculação", "Cardio", "Aulas Coletivas", "Estacionamento"]
  },
  {
    id: 47,
    name: "Vértice Itaquera Arena",
    region: "Capital - Zona Leste",
    address: "Av. Radial Leste, 3200 - Itaquera, São Paulo - SP",
    cep: "08220-000",
    lat: -23.5430,
    lng: -46.4710,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 2056-4047",
    amenities: ["Musculação 1.800m²", "Cross Vértice", "Pista de Corrida Interna", "Estacionamento Amplo"]
  },
  {
    id: 48,
    name: "Vértice São Miguel Paulista",
    region: "Capital - Zona Leste",
    address: "Rua Marechal Tito, 1500 - São Miguel, São Paulo - SP",
    cep: "08010-000",
    lat: -23.4980,
    lng: -46.4420,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 15:00",
    phone: "(11) 2031-4048",
    amenities: ["Musculação", "Cardio", "Ginástica", "Acesso TotalPass"]
  },
  {
    id: 49,
    name: "Vértice Artur Alvim",
    region: "Capital - Zona Leste",
    address: "Rua Maciel Monteiro, 640 - Artur Alvim, São Paulo - SP",
    cep: "03566-000",
    lat: -23.5390,
    lng: -46.4880,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 15:00",
    phone: "(11) 2741-4049",
    amenities: ["Musculação", "Cardio", "Vestiários", "Armários"]
  },
  {
    id: 50,
    name: "Vértice Sapopemba",
    region: "Capital - Zona Leste",
    address: "Av. Sapopemba, 6500 - Sapopemba, São Paulo - SP",
    cep: "03988-000",
    lat: -23.6020,
    lng: -46.5250,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 15:00",
    phone: "(11) 2702-4050",
    amenities: ["Musculação", "Cardio", "Treinamento Funcional", "Estacionamento"]
  },

  // --- SÃO PAULO CAPITAL: ZONA NORTE (51-60) ---
  {
    id: 51,
    name: "Vértice Santana Jardim São Paulo",
    region: "Capital - Zona Norte",
    address: "Rua Pedro Doll, 450 - Santana, São Paulo - SP",
    cep: "02404-001",
    lat: -23.4950,
    lng: -46.6320,
    hoursWeek: "05:30 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 2977-4051",
    amenities: ["Musculação Biomecânica", "Spinning Imersivo", "Sauna", "Vestiário VIP", "Estacionamento com Valet"],
    featured: true
  },
  {
    id: 52,
    name: "Vértice Santana Voluntários",
    region: "Capital - Zona Norte",
    address: "Rua Voluntários da Pátria, 2800 - Santana, São Paulo - SP",
    cep: "02010-200",
    lat: -23.5020,
    lng: -46.6270,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 2281-4052",
    amenities: ["Musculação 1.600m²", "Cardio", "Área Funcional", "Acesso TotalPass"]
  },
  {
    id: 53,
    name: "Vértice Tucuruvi Shopping",
    region: "Capital - Zona Norte",
    address: "Av. Dr. Antônio Maria Laet, 560 - Tucuruvi, São Paulo - SP",
    cep: "02240-000",
    lat: -23.4790,
    lng: -46.6040,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 2952-4053",
    amenities: ["Musculação", "Cardio High-Tech", "Estacionamento Coberto", "Vestiários Climatizados"]
  },
  {
    id: 54,
    name: "Vértice Casa Verde",
    region: "Capital - Zona Norte",
    address: "Av. Braz Leme, 1700 - Casa Verde, São Paulo - SP",
    cep: "02511-000",
    lat: -23.5080,
    lng: -46.6540,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3858-4054",
    amenities: ["Musculação", "Cardio com Vista", "Pista Funcional Externa", "Estacionamento"]
  },
  {
    id: 55,
    name: "Vértice Vila Guilherme Center",
    region: "Capital - Zona Norte",
    address: "Rua Maria Cândida, 1200 - Vila Guilherme, São Paulo - SP",
    cep: "02071-012",
    lat: -23.5130,
    lng: -46.6080,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 2901-4055",
    amenities: ["Musculação", "Cross Training", "Cardio", "Armários Biométricos"]
  },
  {
    id: 56,
    name: "Vértice Mandaqui",
    region: "Capital - Zona Norte",
    address: "Av. Eng. Caetano Álvares, 4100 - Mandaqui, São Paulo - SP",
    cep: "02413-000",
    lat: -23.4880,
    lng: -46.6490,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 2236-4056",
    amenities: ["Musculação", "Cardio", "Aulas Coletivas", "Estacionamento Grátis"]
  },
  {
    id: 57,
    name: "Vértice Tremembé Serra",
    region: "Capital - Zona Norte",
    address: "Av. Nova Cantareira, 3800 - Tremembé, São Paulo - SP",
    cep: "02340-001",
    lat: -23.4650,
    lng: -46.6180,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 2203-4057",
    amenities: ["Musculação", "Área Funcional", "Bicicletário Seguro", "Café Saudável"]
  },
  {
    id: 58,
    name: "Vértice Freguesia do Ó",
    region: "Capital - Zona Norte",
    address: "Av. Itaberaba, 1900 - Freguesia do Ó, São Paulo - SP",
    cep: "02734-000",
    lat: -23.4980,
    lng: -46.6970,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 3931-4058",
    amenities: ["Musculação", "Cardio", "Ginástica", "Estacionamento"]
  },
  {
    id: 59,
    name: "Vértice Limão",
    region: "Capital - Zona Norte",
    address: "Av. Dep. Emílio Carlos, 950 - Limão, São Paulo - SP",
    cep: "02720-000",
    lat: -23.5040,
    lng: -46.6780,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 15:00",
    phone: "(11) 3966-4059",
    amenities: ["Musculação", "Cardio", "Box Funcional", "Vestiários Climatizados"]
  },
  {
    id: 60,
    name: "Vértice Jaçanã",
    region: "Capital - Zona Norte",
    address: "Rua Benjamim Pereira, 520 - Jaçanã, São Paulo - SP",
    cep: "02274-000",
    lat: -23.4680,
    lng: -46.5880,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 15:00",
    phone: "(11) 2241-4060",
    amenities: ["Musculação", "Cardio", "Treinamento em Grupo", "Acesso TotalPass"]
  },

  // --- GRANDE SÃO PAULO / ABC / METROPOLITANA (61-72) ---
  {
    id: 61,
    name: "Vértice Santo André Jardim",
    region: "Grande SP - ABC",
    address: "Rua das Figueiras, 1100 - Bairro Jardim, Santo André - SP",
    cep: "09080-300",
    lat: -23.6520,
    lng: -46.5410,
    hoursWeek: "05:30 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 4436-4061",
    amenities: ["Musculação Biomecânica", "Spinning", "Sauna", "Vestiários VIP", "Estacionamento com Manobrista"]
  },
  {
    id: 62,
    name: "Vértice Santo André Centro",
    region: "Grande SP - ABC",
    address: "Rua General Glicério, 450 - Centro, Santo André - SP",
    cep: "09015-190",
    lat: -23.6590,
    lng: -46.5310,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 4992-4062",
    amenities: ["Musculação 1.400m²", "Cardio", "Cross Training", "Acesso TotalPass"]
  },
  {
    id: 63,
    name: "Vértice São Bernardo Kennedy",
    region: "Grande SP - ABC",
    address: "Av. Kennedy, 1400 - Anchieta, São Bernardo do Campo - SP",
    cep: "09726-253",
    lat: -23.6890,
    lng: -46.5540,
    hoursWeek: "05:30 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 4125-4063",
    amenities: ["Musculação 2.000m²", "Cardio High-End", "Recovery Lounge", "Estacionamento Amplo"]
  },
  {
    id: 64,
    name: "Vértice São Bernardo Rudge Ramos",
    region: "Grande SP - ABC",
    address: "Av. Caminho do Mar, 2800 - Rudge Ramos, São Bernardo do Campo - SP",
    cep: "09609-000",
    lat: -23.6680,
    lng: -46.5740,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 4368-4064",
    amenities: ["Musculação", "Cardio", "Pilates Studio", "Vestiários Modernos"]
  },
  {
    id: 65,
    name: "Vértice São Caetano Goiás",
    region: "Grande SP - ABC",
    address: "Av. Goiás, 1850 - Santa Paula, São Caetano do Sul - SP",
    cep: "09521-310",
    lat: -23.6190,
    lng: -46.5620,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 4224-4065",
    amenities: ["Musculação Premium", "Spinning", "Sauna Finlandesa", "Estacionamento com Valet"]
  },
  {
    id: 66,
    name: "Vértice Diadema Centro",
    region: "Grande SP - ABC",
    address: "Av. Fábio Eduardo Ramos Esquivel, 850 - Centro, Diadema - SP",
    cep: "09920-570",
    lat: -23.6850,
    lng: -46.6190,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 4056-4066",
    amenities: ["Musculação", "Cardio", "Box Funcional", "Acesso TotalPass"]
  },
  {
    id: 67,
    name: "Vértice Mauá Plaza",
    region: "Grande SP - ABC",
    address: "Av. Governador Mario Covas Júnior, 600 - Centro, Mauá - SP",
    cep: "09390-040",
    lat: -23.6680,
    lng: -46.4630,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 4547-4067",
    amenities: ["Musculação 1.500m²", "Cardio", "Aulas Coletivas", "Estacionamento"]
  },
  {
    id: 68,
    name: "Vértice Osasco Campesina",
    region: "Grande SP - Oeste/Norte",
    address: "Av. Franz Voegeli, 750 - Campesina, Osasco - SP",
    cep: "06020-190",
    lat: -23.5450,
    lng: -46.7720,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 3683-4068",
    amenities: ["Musculação 1.800m²", "Cardio", "Spinning", "Estacionamento Grátis"]
  },
  {
    id: 69,
    name: "Vértice Alphaville Barueri",
    region: "Grande SP - Oeste/Norte",
    address: "Al. Rio Negro, 1030 - Alphaville Industrial, Barueri - SP",
    cep: "06454-000",
    lat: -23.5010,
    lng: -46.8520,
    hoursWeek: "05:30 às 23:30",
    hoursWeekend: "08:00 às 19:00",
    phone: "(11) 4195-4069",
    amenities: ["Musculação Biomecânica", "Recovery Cryo", "Sauna", "Valet Cortesia", "Lounge Executivo"],
    featured: true
  },
  {
    id: 70,
    name: "Vértice Guarulhos Maia",
    region: "Grande SP - Oeste/Norte",
    address: "Av. Paulo Faccini, 1600 - Bosque Maia, Guarulhos - SP",
    cep: "07115-260",
    lat: -23.4560,
    lng: -46.5280,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(11) 2440-4070",
    amenities: ["Musculação 2.100m²", "Cardio Panorâmico", "Spinning Studio", "Estacionamento Amplo"]
  },
  {
    id: 71,
    name: "Vértice Cotia Granja Viana",
    region: "Grande SP - Oeste/Norte",
    address: "Rod. Raposo Tavares, Km 22,5 - Granja Viana, Cotia - SP",
    cep: "06709-015",
    lat: -23.5930,
    lng: -46.8390,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 4702-4071",
    amenities: ["Musculação", "Área Verde Externa", "Pilates", "Estacionamento"]
  },
  {
    id: 72,
    name: "Vértice Mogi das Cruzes Centro",
    region: "Grande SP - Alto Tietê",
    address: "Rua Coronel Souza Franco, 900 - Centro, Mogi das Cruzes - SP",
    cep: "08710-020",
    lat: -23.5240,
    lng: -46.1890,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(11) 4799-4072",
    amenities: ["Musculação 1.600m²", "Cardio", "Lutas", "Acesso TotalPass"]
  },

  // --- INTERIOR DE SÃO PAULO (73-83) ---
  {
    id: 73,
    name: "Vértice Campinas Cambuí",
    region: "Interior de SP",
    address: "Rua Coronel Quirino, 1550 - Cambuí, Campinas - SP",
    cep: "13025-002",
    lat: -22.8980,
    lng: -47.0540,
    hoursWeek: "05:30 às 23:30",
    hoursWeekend: "08:00 às 18:00",
    phone: "(19) 3254-4073",
    amenities: ["Musculação High-End", "Área Recovery", "Sauna", "Valet", "Spinning Imersivo"],
    featured: true
  },
  {
    id: 74,
    name: "Vértice Campinas Barão Geraldo",
    region: "Interior de SP",
    address: "Av. Albino J. B. de Oliveira, 1300 - Barão Geraldo, Campinas - SP",
    cep: "13084-551",
    lat: -22.8250,
    lng: -47.0860,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(19) 3289-4074",
    amenities: ["Musculação", "Cardio 40 Aparelhos", "Cross Training", "Estacionamento"]
  },
  {
    id: 75,
    name: "Vértice Ribeirão Preto Fiusa",
    region: "Interior de SP",
    address: "Av. Prof. João Fiúsa, 1800 - Alto da Boa Vista, Ribeirão Preto - SP",
    cep: "14025-310",
    lat: -21.1960,
    lng: -47.8180,
    hoursWeek: "05:30 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(16) 3623-4075",
    amenities: ["Musculação 2.300m²", "Piscina Aquecida", "Sauna Úmida & Seca", "Estacionamento com Valet"]
  },
  {
    id: 76,
    name: "Vértice Sorocaba Campolim",
    region: "Interior de SP",
    address: "Av. Antônio Carlos Comitre, 950 - Parque Campolim, Sorocaba - SP",
    cep: "18047-620",
    lat: -23.5320,
    lng: -47.4650,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(15) 3234-4076",
    amenities: ["Musculação", "Cardio", "Spinning Cinema", "Estacionamento Grátis"]
  },
  {
    id: 77,
    name: "Vértice São José dos Campos Aquarius",
    region: "Interior de SP",
    address: "Av. Comendador Vicente de Paulo Penido, 450 - Jd. Aquarius, São José dos Campos - SP",
    cep: "12246-840",
    lat: -23.2180,
    lng: -45.9080,
    hoursWeek: "05:30 às 23:00",
    hoursWeekend: "08:00 às 18:00",
    phone: "(12) 3922-4077",
    amenities: ["Musculação Premium", "Cross Vértice", "Sauna", "Estacionamento"]
  },
  {
    id: 78,
    name: "Vértice Jundiaí Nove de Julho",
    region: "Interior de SP",
    address: "Av. 9 de Julho, 2400 - Bela Vista, Jundiaí - SP",
    cep: "13208-056",
    lat: -23.1920,
    lng: -46.8890,
    hoursWeek: "06:00 às 23:00",
    hoursWeekend: "08:00 às 17:00",
    phone: "(11) 4586-4078",
    amenities: ["Musculação 1.700m²", "Cardio Conectado", "Pilates", "Estacionamento Amplo"]
  },
  {
    id: 79,
    name: "Vértice Piracicaba Centro",
    region: "Interior de SP",
    address: "Av. Torquato da Silva Leitão, 580 - São Dimas, Piracicaba - SP",
    cep: "13416-015",
    lat: -22.7160,
    lng: -47.6490,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(19) 3434-4079",
    amenities: ["Musculação", "Cardio", "Aulas Coletivas", "Vestiários Climatizados"]
  },
  {
    id: 80,
    name: "Vértice Bauru Nações",
    region: "Interior de SP",
    address: "Av. Nações Unidas, 22-50 - Jardim Panorama, Bauru - SP",
    cep: "17011-105",
    lat: -22.3380,
    lng: -49.0680,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 16:00",
    phone: "(14) 3227-4080",
    amenities: ["Musculação 1.600m²", "Cardio", "Box Funcional", "Estacionamento"]
  },
  {
    id: 81,
    name: "Vértice São José do Rio Preto Redentora",
    region: "Interior de SP",
    address: "Rua Silva Jardim, 3400 - Vila Redentora, São José do Rio Preto - SP",
    cep: "15015-060",
    lat: -20.8170,
    lng: -49.3850,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(17) 3233-4081",
    amenities: ["Musculação Biomecânica", "Spinning", "Sauna", "Estacionamento"]
  },
  {
    id: 82,
    name: "Vértice Taubaté Independência",
    region: "Interior de SP",
    address: "Av. Independência, 1100 - Independência, Taubaté - SP",
    cep: "12031-000",
    lat: -23.0310,
    lng: -45.5680,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 15:00",
    phone: "(12) 3631-4082",
    amenities: ["Musculação", "Cardio", "Treino Funcional", "Acesso TotalPass"]
  },
  {
    id: 83,
    name: "Vértice Limeira Centro",
    region: "Interior de SP",
    address: "Rua Carlos Gomes, 1250 - Centro, Limeira - SP",
    cep: "13480-011",
    lat: -22.5650,
    lng: -47.4040,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 15:00",
    phone: "(19) 3441-4083",
    amenities: ["Musculação 1.500m²", "Cardio", "Vestiários", "Armários Biométricos"]
  },

  // --- LITORAL PAULISTA (84-89) ---
  {
    id: 84,
    name: "Vértice Santos Gonzaga Orla",
    region: "Litoral Paulista",
    address: "Av. Presidente Wilson, 55 - Gonzaga, Santos - SP",
    cep: "11055-000",
    lat: -23.9680,
    lng: -46.3330,
    hoursWeek: "05:30 às 23:00",
    hoursWeekend: "07:30 às 18:00",
    phone: "(13) 3284-4084",
    amenities: ["Vista Frontal para o Mar", "Musculação Biomecânica", "Spinning", "Sauna", "Valet Cortesia"],
    featured: true
  },
  {
    id: 85,
    name: "Vértice Santos Ponta da Praia",
    region: "Litoral Paulista",
    address: "Av. Almirante Saldanha da Gama, 140 - Ponta da Praia, Santos - SP",
    cep: "11030-401",
    lat: -23.9870,
    lng: -46.3050,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(13) 3261-4085",
    amenities: ["Musculação 1.600m²", "Cardio Panorâmico", "Recovery", "Estacionamento"]
  },
  {
    id: 86,
    name: "Vértice Praia Grande Boqueirão",
    region: "Litoral Paulista",
    address: "Av. Presidente Costa e Silva, 800 - Boqueirão, Praia Grande - SP",
    cep: "11701-000",
    lat: -24.0080,
    lng: -46.4110,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(13) 3491-4086",
    amenities: ["Musculação 1.800m²", "Cardio High-Tech", "Cross Funcional", "Estacionamento Amplo"]
  },
  {
    id: 87,
    name: "Vértice Guarujá Pitangueiras",
    region: "Litoral Paulista",
    address: "Rua Mário Ribeiro, 650 - Pitangueiras, Guarujá - SP",
    cep: "11410-192",
    lat: -23.9930,
    lng: -46.2570,
    hoursWeek: "06:00 às 22:30",
    hoursWeekend: "08:00 às 17:00",
    phone: "(13) 3386-4087",
    amenities: ["Musculação", "Cardio", "Vestiários Premium", "Acesso TotalPass"]
  },
  {
    id: 88,
    name: "Vértice Guarujá Enseada",
    region: "Litoral Paulista",
    address: "Av. Dom Pedro I, 2100 - Enseada, Guarujá - SP",
    cep: "11440-002",
    lat: -23.9850,
    lng: -46.2310,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 16:00",
    phone: "(13) 3355-4088",
    amenities: ["Musculação", "Cardio", "Área Funcional", "Estacionamento Grátis"]
  },
  {
    id: 89,
    name: "Vértice São Vicente Centro",
    region: "Litoral Paulista",
    address: "Av. Presidente Wilson, 1200 - Centro, São Vicente - SP",
    cep: "11320-000",
    lat: -23.9710,
    lng: -46.3760,
    hoursWeek: "06:00 às 22:00",
    hoursWeekend: "08:00 às 16:00",
    phone: "(13) 3468-4089",
    amenities: ["Musculação", "Cardio Conectado", "Aulas Coletivas", "Vestiários Climatizados"]
  }
];

// Tutoriais de Exercícios para os 9 Grupos Musculares Solicitados
export const INITIAL_EXERCISES = [
  // 1. Peito
  {
    id: "ex-1",
    name: "Supino Reto com Barra",
    category: "Peito",
    machine: "Banco Reto Olímpico com Barra Guiada/Livre",
    targetMuscles: "Peitoral Maior, Deltóide Anterior, Tríceps Braquial",
    difficulty: "Intermediário",
    videoMock: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Deite-se no banco mantendo 5 pontos de contato: cabeça, parte superior das costas, glúteos e ambos os pés firmes no chão.",
      "Segure a barra com pegada ligeiramente mais larga que os ombros e realize uma retração escapular ativa.",
      "Retire a barra do suporte e desça controladamente até tocar a linha média do esterno (peitoral).",
      "Empurre a barra verticalmente até a extensão dos cotovelos sem perder o travamento escapular."
    ],
    properPosture: "Mantenha o peito estufado, escápulas aduzidas e pés cravados no piso durante todo o curso do movimento.",
    commonMistakes: "Tirar as nádegas do banco, rebater a barra contra o peito ou abrir os cotovelos a 90 graus (risco ao ombro).",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },
  {
    id: "ex-2",
    name: "Peck Deck / Voador",
    category: "Peito",
    machine: "Máquina Flye Articulada",
    targetMuscles: "Peitoral Maior (Feixe Esternocostal e Clavicular)",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajuste a altura do banco para que os apoios fiquem na linha do meio do peito.",
      "Mantenha cotovelos levemente flexionados e os ombros deprimidos para longe das orelhas.",
      "Aproxime as mãos à frente do peito sentindo o pico de contração por 1 segundo.",
      "Retorne à posição inicial de forma lenta e controlada, sem deixar os pesos encostarem totalmente."
    ],
    properPosture: "Mantenha as escápulas coladas no encosto e expire ao fechar os braços.",
    commonMistakes: "Jogar os ombros para frente no pico de contração ou hiperextender os braços na abertura.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },

  // 2. Costas
  {
    id: "ex-3",
    name: "Puxada Alta na Barra (Lat Pulldown)",
    category: "Costas",
    machine: "Polia Alta com Barra Aberta",
    targetMuscles: "Grande Dorsal, Redondo Maior, Bíceps, Rombóides",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajuste os roletes da coxa para que suas pernas fiquem firmes e sem folga.",
      "Segure a barra com pegada pronada aberta e sente-se com a coluna alinhada.",
      "Inicie o movimento deprimindo as escápulas antes de flexionar os cotovelos.",
      "Puxe a barra em direção à parte superior do peito e retorne controlando a subida."
    ],
    properPosture: "Incline o tronco levemente para trás (cerca de 10-15°), peito aberto e queixo neutro.",
    commonMistakes: "Puxar a barra atrás da nuca, balançar excessivamente o tronco ou puxar apenas com a força dos braços.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },
  {
    id: "ex-4",
    name: "Remada Baixa no Triângulo",
    category: "Costas",
    machine: "Polia Baixa Sentada com Puxador V",
    targetMuscles: "Grande Dorsal, Trapézio Médio/Inferior, Rombóides",
    difficulty: "Intermediário",
    videoMock: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Posicione os pés na plataforma com joelhos levemente destravados.",
      "Segure o pegador triangular com a coluna ereta e peito aberto.",
      "Puxe o pegador em direção ao abdômen, unindo as escápulas no final.",
      "Alongue as costas na volta controlando o retorno das placas de peso."
    ],
    properPosture: "Mantenha a curvatura lombar anatômica preservada sem arquear a coluna para frente.",
    commonMistakes: "Usar impulso lombar para iniciar a puxada ou deixar os ombros rolarem para a frente.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },

  // 3. Pernas
  {
    id: "ex-5",
    name: "Leg Press 45°",
    category: "Pernas",
    machine: "Plataforma de Leg Press 45 Graus Inclinada",
    targetMuscles: "Quadríceps, Glúteos Máximos, Isquiotibiais",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Acomode a coluna e o quadril totalmente apoiados no encosto sem folgas.",
      "Coloque os pés na largura dos ombros no meio da plataforma com pontas levemente para fora.",
      "Destrave a trava de segurança segurando as alças laterais.",
      "Flexione os joelhos controladamente até atingir 90° e empurre com os calcanhares sem travar totalmente os joelhos no topo."
    ],
    properPosture: "Mantenha o quadril colado no banco durante toda a descida; nunca permita retroversão pélvica.",
    commonMistakes: "Descolar a lombar do encosto, valgo dinâmico (joelhos apontando para dentro) e estalar joelhos no final.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },
  {
    id: "ex-6",
    name: "Cadeira Extensora",
    category: "Pernas",
    machine: "Cadeira Extensora Biomecânica",
    targetMuscles: "Quadríceps (Reto Femoral, Vasto Lateral, Medial e Intermédio)",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajuste o encosto de modo que o eixo de rotação da máquina coincida com a linha dos seus joelhos.",
      "Posicione o rolo de espuma sobre a parte anterior dos tornozelos.",
      "Segure firme nos apoios laterais e estenda os joelhos até a contração total dos quadríceps.",
      "Segure 1 segundo no topo e desça com cadência lenta."
    ],
    properPosture: "Mantenha o tronco firme apoiado e não balance o corpo para vencer a carga.",
    commonMistakes: "Ajustar o rolo nos dedos do pé ou levantar o quadril da poltrona durante a extensão.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },

  // 4. Ombros
  {
    id: "ex-7",
    name: "Elevação Lateral com Halteres",
    category: "Ombros",
    machine: "Halteres Anatômicos de Uretano",
    targetMuscles: "Deltóide Lateral / Medial",
    difficulty: "Intermediário",
    videoMock: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Em pé, com os pés na largura dos ombros e abdômen contraído, segure um halter em cada mão.",
      "Mantenha uma leve flexão nos cotovelos e incline o tronco 5 graus à frente.",
      "Eleve os braços lateralmente até a altura dos ombros, liderando o movimento pelos cotovelos.",
      "Controle a descida até quase tocar as coxas e repita."
    ],
    properPosture: "Evite encolher o pescoço (trapézio superior) e não ultrapasse a linha do ombro.",
    commonMistakes: "Dar impulso com as pernas, dobrar os cotovelos em 90 graus ou jogar os braços muito para trás.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },
  {
    id: "ex-8",
    name: "Desenvolvimento com Halteres Sentado",
    category: "Ombros",
    machine: "Banco com Encosto a 80-85°",
    targetMuscles: "Deltóide Anterior, Lateral, Tríceps",
    difficulty: "Intermediário",
    videoMock: "https://images.unsplash.com/photo-1584863265684-2631af21502e?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Sente-se com as costas apoiadas, pés cravados no solo e halteres na altura das orelhas.",
      "Mantenha os cotovelos posicionados ligeiramente à frente do plano coronal (plano escapular).",
      "Empurre os halteres para cima de forma sincronizada até quase estender os braços.",
      "Retorne com controle até a altura dos ombros."
    ],
    properPosture: "Evite hiperextender a coluna lombar; mantenha o core contraído o tempo inteiro.",
    commonMistakes: "Bater os halteres no topo ou descer excessivamente forçando o manguito rotador.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },

  // 5. Bíceps
  {
    id: "ex-9",
    name: "Rosca Scott na Máquina",
    category: "Bíceps",
    machine: "Banco Scott com Barra W / Polia",
    targetMuscles: "Bíceps Braquial, Braquial Anterior",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajuste a altura do banco para que suas axilas fiquem apoiadas no topo da almofada inclinada.",
      "Segure a barra com pegada supinada e braços estendidos (sem hiperextender os cotovelos).",
      "Flexione os cotovelos puxando o peso até a contração máxima do bíceps.",
      "Desça lentamente resistindo à gravidade até 90% da extensão."
    ],
    properPosture: "Mantenha o peito colado no apoio e a cabeça alinhada com a coluna.",
    commonMistakes: "Tirar as axilas do apoio para aplicar alavanca ou esticar violentamente o cotovelo no fim.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },

  // 6. Tríceps
  {
    id: "ex-10",
    name: "Tríceps Pulley na Corda",
    category: "Tríceps",
    machine: "Cabo de Polia Alta com Acessório de Corda",
    targetMuscles: "Tríceps Braquial (Cabeça Lateral, Longa e Medial)",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Fique de frente para a polia alta, joelhos levemente flexionados e tronco inclinado cerca de 10°.",
      "Fixe os cotovelos nas laterais das costelas sem deixá-los oscilarem.",
      "Estenda os antebraços para baixo abrindo a corda para fora no ponto mais baixo.",
      "Retorne suavemente até que os antebraços formem um ângulo de 90° com os braços."
    ],
    properPosture: "Ombros para trás e para baixo, peito estufado e cotovelos travados na lateral do tronco.",
    commonMistakes: "Mover os cotovelos para frente e para trás como se estivesse remando, ou usar o tronco.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },

  // 7. Abdômen
  {
    id: "ex-11",
    name: "Abdominal na Polia Alta (Cable Crunch)",
    category: "Abdômen",
    machine: "Polia Alta com Corda",
    targetMuscles: "Reto Abdominal e Oblíquos",
    difficulty: "Intermediário",
    videoMock: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Ajoelhe-se em frente à polia segurando as pontas da corda na altura das orelhas.",
      "Mantenha o quadril fixo no lugar; o movimento deve vir exclusivamente da flexão da coluna.",
      "Enrole o tronco levando a cabeça em direção aos joelhos contraindo fortemente o abdômen.",
      "Retorne à posição inicial de forma lenta mantendo a tensão na parede abdominal."
    ],
    properPosture: "Não sente nos calcanhares ao descer. O quadril age como um eixo estático.",
    commonMistakes: "Flexionar os quadris ao invés da coluna lombar/torácica, transformando o exercício em dobradiça.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },

  // 8. Cardio
  {
    id: "ex-12",
    name: "Simulador de Escada High-Performance",
    category: "Cardio",
    machine: "Climber / Escada Ergométrica Rotativa",
    targetMuscles: "Sistema Cardiovascular, Glúteos, Panturrilhas, Quadríceps",
    difficulty: "Avançado",
    videoMock: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Suba na máquina antes de acionar a velocidade inicial de segurança.",
      "Mantenha a postura ereta e olhe para a frente, não para os seus pés.",
      "Pise com toda a planta do pé no degrau, impulsionando pelo calcanhar para ativar glúteos.",
      "Mantenha as mãos levemente apoiadas nas barras apenas para equilíbrio, sem descarregar o peso do corpo."
    ],
    properPosture: "Tronco ereto sem debruçar sobre o painel. Passadas firmes e cadenciadas.",
    commonMistakes: "Segurar firme e empurrar o corpo com os braços, retirando a carga das pernas e reduzindo o gasto calórico.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },

  // 9. Glúteos
  {
    id: "ex-13",
    name: "Elevação Pélvica com Barra / Hip Thrust",
    category: "Glúteos",
    machine: "Máquina Hip Thrust Dedicada ou Banco com Barra Acolchoada",
    targetMuscles: "Glúteo Máximo, Isquiotibiais, Core",
    difficulty: "Intermediário",
    videoMock: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Apoie a linha inferior das escápulas na borda do banco acolchoado.",
      "Posicione a barra sobre a linha do quadril com proteção de espuma.",
      "Deixe os pés na largura do quadril de modo que suas canelas fiquem verticais (90°) no ponto alto.",
      "Empurre o chão com os calcanhares e eleve o quadril até ficar paralelo ao solo, apertando os glúteos por 2 segundos."
    ],
    properPosture: "Mantenha o queixo apontado para o peito olhando para frente no topo; não hiperestenda a lombar.",
    commonMistakes: "Olhar para o teto, arquear as costas excessivamente e posicionar os pés longe ou perto demais.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  },
  {
    id: "ex-14",
    name: "Cadeira Abdutora",
    category: "Glúteos",
    machine: "Máquina Abdutora Sentada",
    targetMuscles: "Glúteo Médio e Glúteo Mínimo",
    difficulty: "Iniciante",
    videoMock: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&auto=format&fit=crop&q=80",
    steps: [
      "Acomode as costas no encosto e posicione a parte externa dos joelhos contra as almofadas.",
      "Selecione uma amplitude confortável e sem dor na articulação do quadril.",
      "Abra as pernas controladamente até a contração lateral máxima.",
      "Retorne lentamente mantendo a tensão sem bater os pesos da torre."
    ],
    properPosture: "Costas bem apoiadas e pés relaxados sobre os suportes inferiores.",
    commonMistakes: "Balançar as costas ou abrir e fechar as pernas rápido demais sem cadência excêntrica.",
    safetyWarning: "Os tutoriais são educativos. Em caso de dúvida, procure um profissional qualificado."
  }
];

// Personal Trainers Cadastrados para Diárias
export const INITIAL_PERSONALS = [
  {
    id: "pt-1",
    name: "Rodrigo Mendonça, CREF 089214-G/SP",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    specialties: ["Hipertrofia Muscular", "Biomecânica do Movimento", "Preparação Física"],
    experienceYears: 10,
    rating: 4.95,
    reviewsCount: 142,
    dailyRate: 150.00,
    gymsServedIds: [1, 2, 3, 11, 13, 26, 27],
    availableDays: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    availableHours: ["06:00", "07:00", "08:00", "09:00", "18:00", "19:00", "20:00"],
    bio: "Especialista em biomecânica aplicada e ganho expressivo de massa muscular sem dores articulares. Treinador de atletas de alta performance."
  },
  {
    id: "pt-2",
    name: "Camila Vasconcelos, CREF 104523-G/SP",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    specialties: ["Emagrecimento Saudável", "Glúteos & Pernas", "Condicionamento Feminino"],
    experienceYears: 8,
    rating: 4.98,
    reviewsCount: 189,
    dailyRate: 160.00,
    gymsServedIds: [11, 12, 13, 14, 15, 26, 39],
    availableDays: ["Segunda", "Quarta", "Quinta", "Sexta", "Sábado"],
    availableHours: ["07:00", "08:00", "10:00", "11:00", "17:00", "18:00", "19:00"],
    bio: "Pós-graduada em Fisiologia do Exercício pela USP. Metodologia focada em alta queima calórica e desenho muscular sem lesões."
  },
  {
    id: "pt-3",
    name: "Lucas Alencar, CREF 072119-G/SP",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=80",
    specialties: ["Reabilitação Postural", "Treino para Terceira Idade", "Força Funcional"],
    experienceYears: 12,
    rating: 4.92,
    reviewsCount: 96,
    dailyRate: 140.00,
    gymsServedIds: [1, 4, 15, 29, 30, 51, 52],
    availableDays: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    availableHours: ["08:00", "09:00", "14:00", "15:00", "16:00"],
    bio: "Fisioterapeuta e Educador Físico focado em alinhamento de coluna, alívio de lombalgia e fortalecimento seguro de articulações."
  },
  {
    id: "pt-4",
    name: "Beatriz Nogueira, CREF 120485-G/SP",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    specialties: ["Cross Training", "HIIT & Queima Rápida", "Resistência Cardiovascular"],
    experienceYears: 6,
    rating: 4.89,
    reviewsCount: 110,
    dailyRate: 130.00,
    gymsServedIds: [24, 39, 40, 41, 61, 63, 73],
    availableDays: ["Terça", "Quinta", "Sexta", "Sábado", "Domingo"],
    availableHours: ["06:00", "07:00", "17:00", "18:00", "19:00", "20:00"],
    bio: "Treinos intensos, dinâmicos e focados em superação dos seus limites com alto padrão de técnica."
  },
  {
    id: "pt-5",
    name: "Gabriel Santos, CREF 093847-G/SP",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    specialties: ["Powerlifting", "Força Pura", "Ganho de Performance"],
    experienceYears: 9,
    rating: 4.97,
    reviewsCount: 164,
    dailyRate: 170.00,
    gymsServedIds: [1, 13, 27, 35, 68, 69, 73],
    availableDays: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    availableHours: ["06:00", "07:00", "18:00", "19:00", "20:00", "21:00"],
    bio: "Recordista estadual de supino e agachamento. Especialista em técnica impecável de movimentos básicos e quebra de platôs de força."
  }
];

// Clientes Demo Iniciais (com data de nascimento como senha padrão!)
export const INITIAL_CLIENTS = [
  {
    id: "cli-1",
    name: "Carlos Eduardo Silva",
    email: "aluno@vertice.com.br",
    birthDate: "15/08/1995",
    password: "15081995", // Senha inicial = DDMMAAAA
    passwordChanged: false,
    phone: "(11) 98765-4321",
    cpf: "345.678.901-22",
    selectedGymId: 1, // Vértice Paulista Prime
    plan: "Vértice Anual Fidelity",
    monthlyPrice: 220.00,
    activeMonths: 8, // Faltam 4 meses para R$ 70,00!
    role: "client",
    status: "Ativo",
    memberSince: "15/01/2026",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "admin-1",
    name: "Administrador Master - Vértice",
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

// Promoções Ativas
export const INITIAL_PROMOTIONS = [
  {
    id: "promo-1",
    title: "Start Vértice 2026",
    subtitle: "Comece hoje seu treino na maior rede de São Paulo",
    pricePromo: "R$ 149,90",
    period: "no 1º mês",
    normalPrice: "Depois R$ 220,00/mês",
    tag: "MAIS POPULAR",
    badge: "Economize R$ 70 no primeiro mês",
    conditions: "Válido para novas adesões no plano anual. O tempo é contabilizado normalmente para o Programa de Fidelidade de R$ 70,00/mês a partir do 13º mês."
  },
  {
    id: "promo-2",
    title: "Matrícula & Avaliação Zero",
    subtitle: "Adesão 100% gratuita em qualquer uma das 89 unidades",
    pricePromo: "R$ 0,00",
    period: "taxa de matrícula",
    normalPrice: "De R$ 150,00 por ZERO",
    tag: "OFERTA LIMITADA",
    badge: "Adesão Grátis",
    conditions: "Isenção total da taxa de matrícula e avaliação médica inicial 100% gratuita com agendamento online."
  },
  {
    id: "promo-3",
    title: "Vértice Duo - Traga um Amigo",
    subtitle: "Treinem juntos na mesma unidade ou em qualquer uma das 89",
    pricePromo: "50% OFF",
    period: "no 2º mês para ambos",
    normalPrice: "Mensalidade regular R$ 220,00",
    tag: "AMIGOS DE TREINO",
    badge: "Bônus Fidelidade",
    conditions: "Ao indicar um amigo que permaneça ativo, ambos ganham 50% de desconto na 2ª mensalidade, sem interromper o ciclo do plano de fidelidade de 1 ano."
  }
];

// Agendamentos Médicos Iniciais
export const INITIAL_MEDICAL_APPOINTMENTS = [
  {
    id: "med-1",
    clientId: "cli-1",
    gymId: 1,
    doctorName: "Dra. Renata Prado (Medicina Esportiva)",
    date: "2026-10-05",
    timeSlot: "10:30",
    status: "Confirmada",
    notes: "Avaliação postural e anamnese cardiorrespiratória gratuita.",
    price: 0.00
  }
];

// Agendamentos de Personal Iniciais
export const INITIAL_PERSONAL_BOOKINGS = [
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

// Histórico de Pagamentos Inicial
export const INITIAL_PAYMENTS = [
  {
    id: "pay-1",
    clientId: "cli-1",
    description: "Mensalidade Vértice Fitness - Mês 8",
    amount: 220.00,
    date: "15/09/2026",
    status: "Pago",
    method: "Cartão de Crédito",
    invoice: "NF-89211"
  },
  {
    id: "pay-2",
    clientId: "cli-1",
    description: "Diária Personal Rodrigo Mendonça",
    amount: 150.00,
    date: "20/09/2026",
    status: "Pago",
    method: "PIX",
    invoice: "REC-PT-0091"
  },
  {
    id: "pay-3",
    clientId: "cli-1",
    description: "Mensalidade Vértice Fitness - Mês 7",
    amount: 220.00,
    date: "15/08/2026",
    status: "Pago",
    method: "Cartão de Crédito",
    invoice: "NF-85402"
  }
];
