import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ClipProps {
  image: string;
  title: string;
  duration: string;
  description: string;
}

interface SortableClipProps {
  clip: ClipProps;
  index: number;
}

const Clip = ({ image, title, duration, description }: ClipProps) => {
  return (
    <div className="clip-container">
      <img src={image} alt={title} className="clip-image" />
      <div className="clip-info">
        <h3>{title}</h3>
        <p>{duration}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const SortableClip: React.FC<SortableClipProps> = ({ clip }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: clip.title,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none',
    cursor: 'grab',
    width: '100%',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Clip
        image={clip.image}
        title={clip.title}
        duration={clip.duration}
        description={clip.description}
      />
    </div>
  );
};

export default SortableClip;
