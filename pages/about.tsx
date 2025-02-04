import Timeline from '../components/Timeline';
import Container from 'components/Container';
import TopTracks from 'components/TopTracks';

export default function About() {
  return (
    <Container title="About">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p className='text-justify'>
          <p> 
          Yo, This is JoyBoy 😄! I love numbers, graphs, forms, patterns and I try my best to use mathematical models, deep learning and computer vision to help computers understand the world complex problems. 
          </p>  
          <p> 
          Kicking people in the head is a passion. Fish is the most delicious thing on earth and I rather solve old maths theorems when I am bored.
          </p> 
          
          Flexible, dynamic and perpetual learner, my collaborative spirit is always trustworthy in a team. 

          </p>
        </div>
        <Timeline />
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
