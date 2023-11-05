import Image from 'next/image';
import { useRouter } from 'next/router';
import type { Tily } from '@/api/type';
import * as Style from '@/components/Roadmap/RoadmapList/TilyCard/style';
import Logo from '@/components/common/Logo';
import TILY_LINK from '@/constants/links';

interface TilyCardProps {
  roadmap: Tily;
}

const TilyCard = (props: TilyCardProps) => {
  const { roadmap } = props;
  const router = useRouter();

  return (
    <Style.Root
      onClick={() => {
        router.push(TILY_LINK.roadmapDetail(roadmap.id));
      }}>
      <section>
        <Style.Container>
          <Logo type="logo" imageSize={25} />
        </Style.Container>
        <Image
          src={'https://cdn.inflearn.com/public/roadmaps/39a4366c-b886-4b38-87da-7797f0ef6ac7/roadmap-2.png'}
          width={500}
          height={250}
          style={{ width: '100%', height: 'auto' }}
          alt={'roadmapImg'}
        />
        <Style.Container>
          <h5>{roadmap.name}</h5>
        </Style.Container>
      </section>

      <Style.Container>
        <p>{roadmap.stepNum}개 STEP</p>
      </Style.Container>
    </Style.Root>
  );
};

export default TilyCard;