export interface Project {
  id: number;
  name: string;
  location: string;
  year: number;
  category: 'residential' | 'commercial' | 'public' | 'interior';
  status: 'completed' | 'ongoing' | 'concept';
  image: string;
  gallery: string[];
  area: string;
  completion: string;
  client: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  location: string;
  year: number;
  category: 'residential' | 'commercial' | 'public' | 'interior';
  status: 'completed' | 'ongoing' | 'concept';
  image: string;
  gallery: string[];
  area: string;
  completion: string;
  client: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Çumra Sağlık Evi',
    location: 'Çumra',
    year: 2025,
    category: 'residential',
    status: 'ongoing',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    area: '450 m²',
    completion: 'Devam Ediyor',
    client: 'Özel',
    description: 'Çumra bölgesinde konumlanan bu sağlık evi projesi, geleneksel Anadolu dokusunu çağdaş mimarlık diliyle harmanlıyor. Geniş çalışma alanları ve akıllı cam sistemleri ile iç-dış mekan bütünlüğü sağlanmış, sürdürülebilir malzemeler kullanılarak enerji verimliliği maksimize edilmiştir.',
  },
];
