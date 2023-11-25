const cities = {
  Barguna: [
    'Barguna Sadar',
    'Amtali',
    'Bamna',
    'Betagi',
    'Patharghata',
    'Taltal',
  ],
  Barisal: [
    'Barisal Sadar',
    'Agailjhara',
    'Babuganj',
    'Bakerganj',
    'Banaripara',
    'Gournadi',
    'Hizla',
    'Mehendiganj',
    'Muladi',
    'Wazirpur',
  ],
  Bhola: [
    'Bhola Sadar',
    'Daulatkhan',
    'Burhanuddin',
    'Tazumuddin',
    'Lalmohan',
    'Char',
    'Manpura',
  ],
  Jhalokati: ['Jhalokati Sadar', 'Kathalia', 'Nalchity', 'Rajapur'],
  Patuakhali: [
    'Patuakhali Sadar',
    'Dumki',
    'Mirzaganj',
    'Bauphal',
    'Galachipa',
    'Dashmina',
    'Rangabali',
    'Kalapara',
  ],
  Pirojpur: [
    'Pirojpur Sadar',
    'Bhandaria',
    'Kawkhali',
    'Mathbaria',
    'Nazirpur',
    'Nesarabad',
    'Indurkan',
  ],
  Bandarban: [
    'Bandarban Sadar',
    'Ali Kadam',
    'Lama',
    'Rowangchhari',
    'Ruma',
    'Naikhongchhari',
    'Thanchi',
  ],
  Brahmanbaria: [
    'Brahmanbaria Sadar',
    'Kasba',
    'Akhaura',
    'Ashuganj',
    'Bancharampur',
    'Bijoynagar',
    'Nasirnagar',
    'Nabinagar',
    'Sarail',
  ],
  Chandpur: [
    'Chandpur Sadar',
    'Faridganj',
    'Haimchar',
    'Hajiganj',
    'Kachua',
    'Matlab',
    'Shahrasti',
  ],
  Chittagong: [
    'Chittagong Sadar',
    'Anwara',
    'Banshkhali',
    'Boalkhali',
    'Chandanaish',
    'Fatikchhari',
    'Hathazari',
    'Karnaphuli',
    'Lohagara',
    'Mirsharai',
    'Patiya',
    'Rangunia',
    'Raozan',
    'Sandwip',
    'Satkania',
    'Sitakunda',
  ],
  Comilla: [
    'Comilla Sadar',
    'Barura',
    'Brahmanpara',
    'Burichong',
    'Sadar Dakshin',
    'Chandina',
    'Chauddagram',
    'Daudkandi',
    'Debidwar',
    'Homna',
    'Laksam',
    'Lalmai',
    'Monohorgonj',
    'Meghna',
    'Muradnagar',
    'Nangalkot',
    'Titas',
  ],
  'Cox Bazar': [
    'Chakaria',
    'Sadar',
    'Kutubdia',
    'Maheshkhali',
    'Ramu',
    'Teknaf',
    'Ukhia',
    'Pekua',
    'Eidgaon',
  ],
  Feni: [
    'Feni Sadar',
    'Daganbhuiyan',
    'Chhagalnaiya',
    'Sonagazi',
    'Parshuram',
    'Fulgazi',
  ],
  Khagrachhari: [
    'Khagrachhari Sadar',
    'Dighinala',
    'Lakshmichhari',
    'Mahalchhari',
    'Manikchhari',
    'Matiranga',
    'Panchhari',
    'Ramgarh',
    'Guimara',
  ],
  Lakshmipur: [
    'Lakshmipur Sadar',
    'Ramganj',
    'Raipur',
    'Ramgati',
    'Kamalnagar',
  ],
  Noakhali: [
    'Noakhali Sadar',
    'Senbagh',
    'Begumganj',
    'Chatkhil',
    'Companiganj',
    'Hatiya',
    'Kabirhat',
    'Sonaimuri',
    'Suborno',
    'Bhashan',
  ],
  Rangamati: [
    'Rangamati Sadar',
    'Belaichhari',
    'Bagaichhari',
    'Barkal',
    'Juraichhari',
    'Rajasthali',
    'Kaptai',
    'Langadu',
    'Naniarchar',
    'Kaukhali',
  ],
  Dhaka: [
    'Dhamrai',
    'Dohar',
    'Keraniganj',
    'Nawabganj',
    'Savar',
    'Adabor',
    'Uttar Khan',
    'Uttara',
    'Kadamtali',
    'Kalabaga',
    'Kafrul',
    'Kamrangirchar',
    'Cantonment',
    'Kotwali',
    'Khilkhet',
    'Khilgaon',
    'Gulshan',
    'Gendaria',
    'Chawkbazar Model',
    'Demra',
    'Turag',
    'Tejgaon',
    'Tejgaon I/A',
    'Dakshinkhan',
    'Darus Salam',
    'Dhanmondi',
    'New Market',
    'Paltan',
    'Pallabi',
    'Bangshal',
    'Badda',
    'Bimanbandar',
    'Motijheel',
    'Mirpur Model',
    'Mohammadpur',
    'Jatrabari',
    'Ramna',
    'Rampura',
    'Lalbagh',
    'Shah Ali',
    'Shahbagh',
    'Sher-e-Bangla Nagar',
    'Shyampur',
    'Sabujbagh',
    'Sutrapur',
    'Hazaribag',
  ],
  Faridpur: [
    'Faridpur Sadar',
    'Alfadanga',
    'Bhanga',
    'Boalmari',
    'Charbhadrasan',
    'Madhukhali',
    'Nagarkanda',
    'Sadarpur',
    'Saltha',
  ],
  Gazipur: ['Gazipur Sadar', 'Kaliakair', 'Kapasia', 'Sreepur', 'Kaliganj'],
  Gopalganj: [
    'Gopalganj Sadar',
    'Kashiani',
    'Kotalipara',
    'Muksudpur',
    'Tungipara',
  ],
  Kishoreganj: [
    'Kuliarchar',
    'Hossainpur',
    'Pakundia',
    'Kishoreganj Sadar',
    'Bajitpur',
    'Austagram',
    'Karimganj',
    'Katiadi',
    'Tarail',
    'Itna',
    'Nikli',
    'Mithamain',
    'Bhairab',
  ],
  Madaripur: ['Madaripur Sadar', 'Kalkini', 'Dasar', 'Rajoir', 'Shibchar'],
  Manikganj: [
    'Manikganj Sadar',
    'Singair',
    'Shivalaya',
    'Saturia',
    'Harirampur',
    'Ghior',
    'Daulatpur',
  ],
  Munshiganj: [
    'Munshiganj Sadar',
    'Sirajdikhan',
    'Lohajang',
    'Sreenagar',
    'Tongibari',
    'Gazaria',
  ],
  Narayanganj: [
    'Narayanganj Sadar',
    'Araihazar',
    'Sonargaon',
    'Bandar',
    'Rupganj',
  ],
  Narsingdi: [
    'Narsingdi Sadar',
    'Belabo',
    'Monohardi',
    'Palash',
    'Raipura',
    'Shibpur',
  ],
  Rajbari: ['Rajbari Sadar', 'Baliakandi', 'Goalanda', 'Pangsha', 'Kalukhali'],
  Shariatpur: [
    'Shariatpur Sadar',
    'Damudya',
    'Naria',
    'Zanjira',
    'Bhedarganj',
    'Gosairhat',
    'Shakhipur',
  ],
  Tangail: [
    'Tangail Sadar',
    'Sakhipur',
    'Basail',
    'Madhupur',
    'Ghatail',
    'Kalihati',
    'Nagarpur',
    'Mirzapur',
    'Gopalpur',
    'Delduar',
    'Bhuapur',
    'Dhanbari',
  ],
  Bagerhat: [
    'Bagerhat Sadar',
    'Chitalmari',
    'Fakirhat',
    'Kachua',
    'Mollahat',
    'Mongla',
    'Morrelganj',
    'Rampal',
    'Sarankhola',
  ],
  Chuadanga: [
    'Chuadanga Sadar',
    'Alamdanga',
    'Jibannagar',
    'Damurhuda',
    'Darsana',
  ],
  Jessore: [
    'Jessore Sadar',
    'Abhaynagar',
    'Keshabpur',
    'Bagherpara',
    'Chaugachha',
    'Manirampur',
    'Jhikargachha',
    'Sharsha',
  ],
  Jhenaidah: [
    'Jhenaidah Sadar',
    'Maheshpur',
    'Kaliganj',
    'Kotchandpur',
    'Shailkupa',
    'Harinakunda',
  ],
  Khulna: [
    'Khulna Sadar',
    'Koyra',
    'Dumuria',
    'Terokhada',
    'Dacope',
    'Dighalia',
    'Paikgachha',
    'Phultala',
    'Batiaghata',
    'Rupsa',
  ],
  Kushtia: [
    'Kushtia Sadar',
    'Mirpur',
    'Khoksa',
    'Bheramara',
    'Kumarkhali',
    'Daulatpur',
  ],
  Magura: ['Magura Sadar', 'Mohammadpur', 'Shalikha', 'Sreepur'],
  Meherpur: ['Meherpur Sadar', 'Gangni', 'Mujibnagar'],
  Narail: ['Narail Sadar', 'Kalia', 'Lohagara'],
  Satkhira: [
    'Satkhira Sadar',
    'Assasuni',
    'Debhata',
    'Tala',
    'Kalaroa',
    'Kaliganj',
    'Shyamnagar',
  ],
  Jamalpur: [
    'Jamalpur Sadar',
    'Dewanganj',
    'Baksiganj',
    'Islampur',
    'Madarganj',
    'Melandaha',
    'Sarishabari',
  ],
  Mymensingh: [
    'Mymensingh Sadar',
    'Bhaluka',
    'Trishal',
    'Haluaghat',
    'Muktagacha',
    'Dhobaura',
    'Fulbaria',
    'Gaffargaon',
    'Gauripur',
    'Ishwarganj',
    'Nandail',
    'Phulpur',
    'Tara Khanda',
  ],
  Netrokona: [
    'Netrokona Sadar',
    'Atpara',
    'Barhatta',
    'Durgapur',
    'Khaliajuri',
    'Kalmakanda',
    'Kendua',
    'Madan',
    'Mohanganj',
    'Purbadhala',
  ],
  Sherpur: ['Sherpur Sadar', 'Nalitabari', 'Sreebardi', 'Jhenaigati', 'Nakla'],
  Bogra: [
    'Adamdighi',
    'Bogra Sadar',
    'Sherpur',
    'Dhunat',
    'Dhupchanchia',
    'Gabtali',
    'Kahaloo',
    'Nandigram',
    'Shajahanpur',
    'Sariakandi',
    'Shibganj',
    'Sonatala',
  ],
  Joypurhat: ['Joypurhat Sadar', 'Akkelpur', 'Kalai', 'Khetlal', 'Panchbibi'],
  Naogaon: [
    'Naogaon Sadar',
    'Atrai',
    'Badalgachhi',
    'Dhamoirhat',
    'Manda',
    'Mohadevpur',
    'Niamatpur',
    'Patnitala',
    'Porsha',
    'Raninagar',
    'Sapahar',
  ],
  Natore: [
    'Natore Sadar',
    'Gurudaspur',
    'Baraigram',
    'Bagatipara',
    'Lalpur',
    'Singra',
    'Naldanga',
  ],
  Chapainawabganj: [
    'Chapainawabganj Sadar',
    'Bholahat',
    'Gomastapur',
    'Nachole',
    'Shibganj',
  ],
  Pabna: [
    'Pabna Sadar',
    'Atgharia',
    'Bera',
    'Bhangura',
    'Chatmohar',
    'Faridpur',
    'Ishwardi',
    'Shathia',
    'Sujanagar',
  ],
  Rajshahi: [
    'Bagha',
    'Bagmara',
    'Charghaṭ',
    'Durgapur',
    'Godagaɽi',
    'Mohanpur',
    'Paba',
    'Puthia',
    'Tanore',
  ],
  Sirajganj: [
    'Sirajganj Sadar',
    'Kazipur',
    'Ullahpara',
    'Shahjadpur',
    'Raiganj',
    'Kamarkhanda',
    'Tarash',
    'Belkuchi',
    'Chauhali',
  ],
  Dinajpur: [
    'Dinajpur Sadar',
    'Biral',
    'Birampur',
    'Birganj',
    'Bochaganj',
    'Chirirbandar',
    'Ghoraghat',
    'Hakimpur',
    'Kaharole',
    'Khansama',
    'Nawabganj',
    'Parbatipur',
    'Fulbari',
  ],
  Gaibandha: [
    'Gaibandha Sadar',
    'Fulchhari',
    'Gobindaganj',
    'Palashbari',
    'Sadullapur',
    'Sundarganj',
    'Saghata',
  ],
  Kurigram: [
    'Kurigram Sadar',
    'Bhurungamari',
    'Char Rajibpur',
    'Chilmari',
    'Nageshwari',
    'Phulbari',
    'Rajarhat',
    'Raomari',
    'Ulipur',
  ],
  Lalmonirhat: [
    'Lalmonirhat Sadar',
    'Patgram',
    'Hatibandha',
    'Kaliganj',
    'Aditmari',
  ],
  Nilphamari: [
    'Nilphamari Sadar',
    'Saidpur',
    'Jaldhaka',
    'Kishoreganj',
    'Domar',
    'Dimla',
  ],
  Panchagarh: ['Panchagarh Sadar', 'Debiganj', 'Boda', 'Atwari', 'Tetulia'],
  Rangpur: [
    'Rangpur Sadar',
    'Badarganj',
    'Mithapukur',
    'Gangachara',
    'Kaunia',
    'Pirgacha',
    'Pirganj',
    'Taraganj',
  ],
  Thakurgaon: [
    'Thakurgaon Sadar',
    'Baliadangi',
    'Haripur',
    'Ranisankail',
    'Pirganj',
  ],
  Habiganj: [
    'Habiganj Sadar',
    'Ajmiriganj',
    'Baniachang',
    'Bahubal',
    'Chunarughat',
    'Lakhai',
    'Madhabpur',
    'Nabiganj',
    'Shaistaganj',
  ],
  Moulvibazar: [
    'Moulvibazar Sadar',
    'Kamalganj',
    'Kulaura',
    'Rajnagar',
    'Sreemangal',
    'Barlekha',
    'Juri',
  ],
  Sunamganj: [
    'Sunamganj Sadar',
    'Bishwamvarpur',
    'Chhatak',
    'Shantiganj',
    'Derai',
    'Dharamapasha',
    'Dowarabazar',
    'Jagannathpur',
    'Jamalganj',
    'Sullah',
    'Tahirpur',
    'Moddonagar',
  ],
  Sylhet: [
    'Sylhet Sadar',
    'Balaganj',
    'Beanibazar',
    'Bishwanath',
    'Companiganj',
    'Dakshin Surma',
    'Fenchuganj',
    'Golapganj',
    'Gowainghat',
    'Jaintiapur',
    'Kanaighat',
    'Osmani Nagar',
    'Zakiganj',
  ],
};

export default cities;
