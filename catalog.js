// ZMCA product catalog — loaded before ai-chat.js
// price is in PHP, null means "contact ZMCA for quote"
const CATALOG = [
  {
    "category": "VACUUM SEALER",
    "name": "FW3150 PORTABLE VACUUM",
    "price": 8000
  },
  {
    "category": "VACUUM SEALER",
    "name": "DZ260W TABLETOP",
    "price": 22000
  },
  {
    "category": "VACUUM SEALER",
    "name": "DZ400W TABLETOP",
    "price": 34000
  },
  {
    "category": "VACUUM SEALER",
    "name": "DZ400 DEEPEN TABLETOP",
    "price": 35000
  },
  {
    "category": "VACUUM SEALER",
    "name": "DZ400W STANDALONE",
    "price": 35000
  },
  {
    "category": "VACUUM SEALER",
    "name": "DZ400 DOUBLE CHAMBER",
    "price": 73000
  },
  {
    "category": "VACUUM SEALER",
    "name": "DZ500 DEEPEN STANDALONE",
    "price": 44000
  },
  {
    "category": "VACUUM SEALER",
    "name": "DZ500 DOUBLE CHAMBER",
    "price": 93000
  },
  {
    "category": "VACUUM SEALER",
    "name": "DZ600 DOUBLE CHAMBER",
    "price": 118000
  },
  {
    "category": "VACUUM SEALER",
    "name": "DZ800 DOUBLE CHAMBER",
    "price": null
  },
  {
    "category": "FOOT SEALER",
    "name": "KSF350 FOOT SEALER",
    "price": 8500
  },
  {
    "category": "FOOT SEALER",
    "name": "KSF450 FOOT SEALER",
    "price": 9500
  },
  {
    "category": "FOOT SEALER",
    "name": "KSF650 FOOT SEALER",
    "price": 10500
  },
  {
    "category": "FOOT SEALER",
    "name": "PDD300 DIRECT COPPER",
    "price": 15500
  },
  {
    "category": "FOOT SEALER",
    "name": "KSF800 3MM FOOT SEALER",
    "price": null
  },
  {
    "category": "BAND SEALER",
    "name": "FR800 SS BODY",
    "price": 12500
  },
  {
    "category": "BAND SEALER",
    "name": "FR900 SS BODY",
    "price": 13500
  },
  {
    "category": "BAND SEALER",
    "name": "FR770 SS BODY",
    "price": 15500
  },
  {
    "category": "BAND SEALER",
    "name": "FRD1000 SOLID INK",
    "price": 21000
  },
  {
    "category": "BAND SEALER",
    "name": "DBF1000 AIR FLUSH",
    "price": 25000
  },
  {
    "category": "BAND SEALER",
    "name": "DBF1000AN NITROFLUSH",
    "price": 32000
  },
  {
    "category": "BAND SEALER",
    "name": "FR1100 (15KG)",
    "price": 90000
  },
  {
    "category": "BAND SEALER",
    "name": "LF1080B NITRO W/ VACUUM",
    "price": 85000
  },
  {
    "category": "BAND SEALER",
    "name": "FRD900W",
    "price": null
  },
  {
    "category": "INDUCTION SEALER",
    "name": "DGYF500C",
    "price": 6500
  },
  {
    "category": "INDUCTION SEALER",
    "name": "DGYF500A",
    "price": 6500
  },
  {
    "category": "INDUCTION SEALER",
    "name": "LX6000A CONTINUOUS",
    "price": 50000
  },
  {
    "category": "HAND SEALER",
    "name": "PFS200 8*2MM",
    "price": 1080
  },
  {
    "category": "HAND SEALER",
    "name": "PFS200 8*5MM",
    "price": 1420
  },
  {
    "category": "HAND SEALER",
    "name": "PFS300 12*5MM",
    "price": 2000
  },
  {
    "category": "HAND SEALER",
    "name": "PFS400 16*5MM",
    "price": 2500
  },
  {
    "category": "HAND SEALER",
    "name": "LFS800 32*3MM",
    "price": 5280
  },
  {
    "category": "HAND SEALER",
    "name": "LFS600 24*3MM",
    "price": 4800
  },
  {
    "category": "HAND SEALER",
    "name": "SKA HAND SEALER",
    "price": 7000
  },
  {
    "category": "CARTON SEALER",
    "name": "FXC4050XF",
    "price": 70000
  },
  {
    "category": "CARTON SEALER",
    "name": "FXA6050S",
    "price": 60000
  },
  {
    "category": "CARTON SEALER",
    "name": "FXC5050",
    "price": 62000
  },
  {
    "category": "STRAPPING MACHINE",
    "name": "KZ900",
    "price": 25000
  },
  {
    "category": "CAPPING MACHINE",
    "name": "ELECTRIC SCREW 25-35",
    "price": 35000
  },
  {
    "category": "CAPPING MACHINE",
    "name": "ELECTRIC SCREW 35-50",
    "price": 35000
  },
  {
    "category": "CAPPING MACHINE",
    "name": "METAL JAR PNEUMATIC",
    "price": 80000
  },
  {
    "category": "DEHYDRATOR",
    "name": "SS-10 DIGITAL",
    "price": null
  },
  {
    "category": "DEHYDRATOR",
    "name": "SS-16 DIGITAL",
    "price": 13280
  },
  {
    "category": "DEHYDRATOR",
    "name": "SS-24 DIGITAL",
    "price": 15080
  },
  {
    "category": "DEHYDRATOR",
    "name": "LT-195 28TRAYS DIGITAL",
    "price": 95000
  },
  {
    "category": "DEHYDRATOR",
    "name": "ST-01 10TRAYS ANALOG",
    "price": 10500
  },
  {
    "category": "DEHYDRATOR",
    "name": "ST-02 16 TRAYS ANALOG",
    "price": 15500
  },
  {
    "category": "DEHYDRATOR",
    "name": "LT-101 16TRAYS ROTARY",
    "price": 16500
  },
  {
    "category": "DEHYDRATOR",
    "name": "LT-026 15TRAYS ROTARY",
    "price": 80000
  },
  {
    "category": "PRINTER",
    "name": "DY8",
    "price": 4000
  },
  {
    "category": "PRINTER",
    "name": "HP241B",
    "price": 12000
  },
  {
    "category": "PRINTER",
    "name": "M6",
    "price": 21000
  },
  {
    "category": "PRINTER",
    "name": "MX1 PLUS",
    "price": 50000
  },
  {
    "category": "PRINTER",
    "name": "SENSOR STAND",
    "price": null
  },
  {
    "category": "PRINTER",
    "name": "CONVEYOR (190*1.5 M)",
    "price": 18000
  },
  {
    "category": "PRINTER",
    "name": "TABLETOP INKJET",
    "price": 32000
  },
  {
    "category": "L-TYPE SEALER",
    "name": "FQL380 TABLETOP",
    "price": 12500
  },
  {
    "category": "L-TYPE SEALER",
    "name": "FQL450 FLOORTYPE",
    "price": 33000
  },
  {
    "category": "L-TYPE SEALER",
    "name": "2 IN 1 DFM5540",
    "price": 65000
  },
  {
    "category": "SHRINK TUNNEL",
    "name": "DSH4020S TABLETOP",
    "price": 30000
  },
  {
    "category": "SHRINK TUNNEL",
    "name": "DSA4525S STANDALONE",
    "price": 42000
  },
  {
    "category": "SHRINK TUNNEL",
    "name": "BSA450 (10KG)",
    "price": 38000
  },
  {
    "category": "SHRINK TUNNEL",
    "name": "DS3015 THERMAL MESH",
    "price": 23000
  },
  {
    "category": "STICKER/BOTTLE LABEL",
    "name": "1538B LABEL",
    "price": 90000
  },
  {
    "category": "STICKER/BOTTLE LABEL",
    "name": "1538C LABEL",
    "price": 90000
  },
  {
    "category": "STICKER/BOTTLE LABEL",
    "name": "MT50C ROUND BOTTLE",
    "price": 50000
  },
  {
    "category": "LIQUID FILLING MACHINE",
    "name": "GC100-1000ML LIQUID 1NZ",
    "price": 28000
  },
  {
    "category": "LIQUID FILLING MACHINE",
    "name": "GC100-1000ML LIQUID 2NZ",
    "price": 53000
  },
  {
    "category": "LIQUID FILLING MACHINE",
    "name": "GYK160 DIGITAL LIQUID",
    "price": 5000
  },
  {
    "category": "PASTE FILLING MACHINE",
    "name": "A02",
    "price": null
  },
  {
    "category": "PASTE FILLING MACHINE",
    "name": "A03",
    "price": null
  },
  {
    "category": "PASTE FILLING MACHINE",
    "name": "GCG 100-1000ML 1NZ",
    "price": 35000
  },
  {
    "category": "PASTE FILLING MACHINE",
    "name": "GCG 100-1000ML 2NZ",
    "price": 68000
  },
  {
    "category": "PASTE FILLING MACHINE",
    "name": "HOPPER WITH MIXER",
    "price": 78000
  },
  {
    "category": "GRANULAR FILLING MACHINE",
    "name": "YTK200 1-100G (GRANULAR)",
    "price": 18500
  },
  {
    "category": "GRANULAR FILLING MACHINE",
    "name": "YTK1200 20-1200G (GRANULAR)",
    "price": 30000
  },
  {
    "category": "GRANULAR FILLING MACHINE",
    "name": "MF100 2-200G (POWDER)",
    "price": 38000
  },
  {
    "category": "PILLOW PACK MACHINE",
    "name": "250mm",
    "price": 260000
  },
  {
    "category": "PILLOW PACK MACHINE",
    "name": "350mm",
    "price": 340000
  },
  {
    "category": "PILLOW PACK MACHINE",
    "name": "450mm",
    "price": null
  },
  {
    "category": "PILLOW PACK MACHINE",
    "name": "600mm",
    "price": 700000
  },
  {
    "category": "PILLOW PACK MACHINE",
    "name": "800mm",
    "price": null
  },
  {
    "category": "AUTOPACK MACHINE",
    "name": "KS100 COFFEE",
    "price": 230000
  },
  {
    "category": "AUTOPACK MACHINE",
    "name": "KS100 SUGAR",
    "price": 230000
  },
  {
    "category": "AUTOPACK MACHINE",
    "name": "KS300 W RIBBON",
    "price": 350000
  },
  {
    "category": "AUTOPACK MACHINE",
    "name": "S100 PASTE 80MM",
    "price": 230000
  },
  {
    "category": "AUTOPACK MACHINE",
    "name": "S100 PASTE 160MM",
    "price": 230000
  },
  {
    "category": "AUTOPACK MACHINE",
    "name": "F260 AUGER W RIBBON",
    "price": 280000
  },
  {
    "category": "AUTOPACK MACHINE",
    "name": "K100 SHAKER W CONVEYOR",
    "price": 340000
  },
  {
    "category": "TRAY SEALER",
    "name": "DS1 MANUAL TRAY SEALER",
    "price": null
  },
  {
    "category": "FOOD PROCESSOR",
    "name": "6L",
    "price": 25000
  },
  {
    "category": "FOOD PROCESSOR",
    "name": "10L",
    "price": 30000
  },
  {
    "category": "FOOD PROCESSOR",
    "name": "13L",
    "price": 42000
  },
  {
    "category": "DE-OILER MACHINE",
    "name": "4L",
    "price": 20000
  },
  {
    "category": "DE-OILER MACHINE",
    "name": "10L",
    "price": 32000
  },
  {
    "category": "DE-OILER MACHINE",
    "name": "400MM (5-10KG)",
    "price": 10000
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "OT-71A SINGLE GAS 16L",
    "price": 15000
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "OT-72A 16L+16L GAS",
    "price": 30000
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "STANDALONE GAS",
    "price": null
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "GRIDDLE GAS",
    "price": 6000
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "PANINI PRESS",
    "price": 10500
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "ELECTRIC GRIDDLE",
    "price": 4500
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "FOOD WARMER TURKS",
    "price": 4950
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "COUNTER GAS 1 BURNER",
    "price": null
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "JUICE EXTRACTOR 4kw",
    "price": 335000
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "JUICE 35OW",
    "price": 18000
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "NOODLE MAKER TABLETOP",
    "price": 8500
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "NOODLE MAKER FLOORTYPE",
    "price": 38000
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "SMOKE HOUSE 45L",
    "price": 42000
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "NEW SMOKE HOUSE 100L",
    "price": 575000
  },
  {
    "category": "KITCHEN EQUIPMENT",
    "name": "450W HAND WRAPPER",
    "price": 4500
  },
  {
    "category": "HERB GRINDER",
    "name": "250G",
    "price": 3000
  },
  {
    "category": "HERB GRINDER",
    "name": "500G",
    "price": 5500
  },
  {
    "category": "HERB GRINDER",
    "name": "1500G",
    "price": 8500
  },
  {
    "category": "HERB GRINDER",
    "name": "3000G",
    "price": 13500
  },
  {
    "category": "MEAT GRINDER",
    "name": "1 HP S/S",
    "price": 12000
  },
  {
    "category": "MEAT GRINDER",
    "name": "1HP",
    "price": 7800
  },
  {
    "category": "MEAT GRINDER",
    "name": "2HP",
    "price": 22000
  },
  {
    "category": "MEAT GRINDER",
    "name": "3HP",
    "price": 38000
  },
  {
    "category": "MEAT GRINDER",
    "name": "5HP",
    "price": 78000
  },
  {
    "category": "MEAT GRINDER",
    "name": "7.5HP",
    "price": null
  },
  {
    "category": "MEAT SLICER",
    "name": "8\"",
    "price": 13500
  },
  {
    "category": "MEAT SLICER",
    "name": "10\"",
    "price": 15500
  },
  {
    "category": "MEAT SLICER",
    "name": "12\"",
    "price": 18500
  },
  {
    "category": "MEAT SLICER",
    "name": "AUTOMATIC TABLETOP",
    "price": 58000
  },
  {
    "category": "MEAT SLICER",
    "name": "AUTOMATIC FLOORTYPE",
    "price": 68000
  },
  {
    "category": "STUFFER",
    "name": "3L",
    "price": 5800
  },
  {
    "category": "STUFFER",
    "name": "7L",
    "price": 7800
  },
  {
    "category": "STUFFER",
    "name": "15L",
    "price": 14500
  },
  {
    "category": "STUFFER",
    "name": "15L ELECTRIC",
    "price": 22000
  },
  {
    "category": "STUFFER",
    "name": "HYDRAULIC 260",
    "price": 105000
  },
  {
    "category": "STUFFER",
    "name": "HYDRAULIC 350",
    "price": 120000
  },
  {
    "category": "BONESAW",
    "name": "HR-210A TABLETOP",
    "price": 23000
  },
  {
    "category": "BONESAW",
    "name": "HR-250B TABLETOP",
    "price": 32000
  },
  {
    "category": "BONESAW",
    "name": "HR-300A TABLETOP",
    "price": 72000
  },
  {
    "category": "BONESAW",
    "name": "JG-300B FLOORTYPE",
    "price": 110000
  },
  {
    "category": "LINKER",
    "name": "MANUAL",
    "price": 22000
  },
  {
    "category": "LINKER",
    "name": "AUTO",
    "price": 260000
  },
  {
    "category": "MEAT MIXER",
    "name": "50L",
    "price": 82000
  },
  {
    "category": "MEAT MIXER",
    "name": "100L",
    "price": 120000
  },
  {
    "category": "PLANETARY MIXER",
    "name": "10QT",
    "price": 19500
  },
  {
    "category": "PLANETARY MIXER",
    "name": "20QT",
    "price": 25500
  },
  {
    "category": "PLANETARY MIXER",
    "name": "30QT",
    "price": 34000
  },
  {
    "category": "PLANETARY MIXER",
    "name": "40QT",
    "price": 58000
  },
  {
    "category": "SPIRAL MIXER",
    "name": "10L (5KG)",
    "price": 22000
  },
  {
    "category": "SPIRAL MIXER",
    "name": "20L (8KG)",
    "price": 28500
  },
  {
    "category": "SPIRAL MIXER",
    "name": "30L (12KG)",
    "price": 35000
  },
  {
    "category": "SPIRAL MIXER",
    "name": "40L",
    "price": 48000
  },
  {
    "category": "SPIRAL MIXER",
    "name": "60L",
    "price": 68000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "DOUGH ROUNDER",
    "price": 72000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "100L DOUGH MIXER",
    "price": 135000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "DOUGH SHEETER 520T",
    "price": 115000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "DOUGH ROLLER",
    "price": 30000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "DOUGH SHEETER FLOORTYPE",
    "price": 135000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "BREAD SLICER",
    "price": 25000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "BREAD PROOFER w/16T",
    "price": 25000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "BREAD PROOFER w/32T",
    "price": 50000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "OVEN SINGLE",
    "price": 35000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "OVEN DOUBLE",
    "price": 60000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "OVEN TRIPLE 9 TRAY",
    "price": 125000
  },
  {
    "category": "BAKERY EQUIPMENT",
    "name": "OVEN TRIPLE 6 TRAY",
    "price": 85000
  },
  {
    "category": "STEAM CABINET",
    "name": "6 TRAY GAS",
    "price": 30000
  },
  {
    "category": "STEAM CABINET",
    "name": "12 TRAY GAS",
    "price": 60000
  },
  {
    "category": "STEAM CABINET",
    "name": "24 TRAY GAS",
    "price": 110000
  },
  {
    "category": "VACUUM TUMBLER",
    "name": "45L",
    "price": 45000
  },
  {
    "category": "VACUUM TUMBLER",
    "name": "100L",
    "price": 165000
  },
  {
    "category": "VACUUM TUMBLER",
    "name": "200L",
    "price": 200000
  },
  {
    "category": "VACUUM TUMBLER",
    "name": "300L",
    "price": 235000
  },
  {
    "category": "VACUUM TUMBLER",
    "name": "400L",
    "price": 285000
  },
  {
    "category": "SILENT BOWL CHOPPER",
    "name": "5L",
    "price": 35000
  },
  {
    "category": "SILENT BOWL CHOPPER",
    "name": "20L WITH COVER",
    "price": 75000
  },
  {
    "category": "SILENT BOWL CHOPPER",
    "name": "20L",
    "price": 53000
  },
  {
    "category": "DOUBLE JACKETTED KETTLE",
    "name": "100L",
    "price": 175000
  },
  {
    "category": "DOUBLE JACKETTED KETTLE",
    "name": "200L",
    "price": 225000
  },
  {
    "category": "PEANUT",
    "name": "ROASTER",
    "price": 45000
  },
  {
    "category": "PEANUT",
    "name": "PEELER",
    "price": 110000
  },
  {
    "category": "FOOD PROCESSING",
    "name": "GARLIC PEELER",
    "price": 8500
  },
  {
    "category": "FOOD PROCESSING",
    "name": "SMALL GARLIC PEELER",
    "price": 20000
  },
  {
    "category": "FOOD PROCESSING",
    "name": "SOYA GRINDER/P.BUTTER",
    "price": 10000
  },
  {
    "category": "FOOD PROCESSING",
    "name": "CUBING MACHINE",
    "price": null
  },
  {
    "category": "FOOD PROCESSING",
    "name": "FRESH MEAT SLICER",
    "price": null
  },
  {
    "category": "FOOD PROCESSING",
    "name": "5HP COLLOID",
    "price": 135000
  },
  {
    "category": "FOOD PROCESSING",
    "name": "PORTABLE MILL GRINDER",
    "price": 4000
  },
  {
    "category": "FOOD PROCESSING",
    "name": "METAL DETECTOR",
    "price": null
  },
  {
    "category": "FOOD PROCESSING",
    "name": "SIOPAO MACHINE",
    "price": 245000
  },
  {
    "category": "FOOD PROCESSING",
    "name": "S/S MILL GRINDER",
    "price": 28000
  },
  {
    "category": "FOOD PROCESSING",
    "name": "HAMMER MILL",
    "price": 25000
  },
  {
    "category": "FOOD PROCESSING",
    "name": "HAMMER MILL FLOORTYPE",
    "price": 135000
  },
  {
    "category": "FOOD PROCESSING",
    "name": "QC205A VEGETABLE CUTTER",
    "price": 32000
  },
  {
    "category": "WEIGHING SCALE",
    "name": "KITCHEN SCALE 5KG",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "TABLE SCALE 40KG",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "TABLE SCALE 15KG",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "TABLE SCALE 6KG",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "PLATFORM SCALE 100KG",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "PLATFORM SCALE 200KG",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "PLATFORM SCALE 300KG",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "PLATFORM SCALE 100KG S/S",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "PLATFORM SCALE 200KG S/S",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "PLATFORM SCALE 300KG S/S",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "PLATFORM SCALE 1000KG",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "LABORATORY SCALE 2000",
    "price": null
  },
  {
    "category": "WEIGHING SCALE",
    "name": "LAB SCALE RLS1000",
    "price": 24000
  },
  {
    "category": "REFRIGERATION",
    "name": "1.2M UC CHILLER",
    "price": null
  },
  {
    "category": "REFRIGERATION",
    "name": "1.2M UC FREEZER",
    "price": null
  },
  {
    "category": "REFRIGERATION",
    "name": "1.5M UC CHILLER",
    "price": null
  },
  {
    "category": "REFRIGERATION",
    "name": "1.5M UC FREEZER",
    "price": null
  },
  {
    "category": "REFRIGERATION",
    "name": "4 DOOR UPRIGHT CHILLER",
    "price": null
  },
  {
    "category": "REFRIGERATION",
    "name": "4 DOOR UPRIGHT FREEZER",
    "price": null
  },
  {
    "category": "REFRIGERATION",
    "name": "4 DOOR UPRIGHT COMBI",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "1HP COMPRESSOR",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "SEMI AUTO CAPSULE (MOLD 00)",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "BLISTER PACKING MACHINE (MOLD 00)",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "ZC-4A TABLET COUNTER",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "CAPSULE POLISHER",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "TDP-6T",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "TABLETOP LABELING",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "V-60 MIXER",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "XZS450 VIBRATING SIEVE",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "2M CONVEYOR (CAN)",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "BLAST FREEZER 20TRAYS (SS304 TRAYS)",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "MFF-30 FIBER LASER MARKING",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "AUTOMATIC CAN SEALING",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "GLUE LABELING MACHINE",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "CONVEYOR-W (200*190*850)",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "DZ600 EXTERNAL VACUUM",
    "price": null
  },
  {
    "category": "NEW ITEMS",
    "name": "TEA BAG MACHINE W TAG",
    "price": null
  }
];
