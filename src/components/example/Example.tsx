import { CardExample } from './CardExample';
import { imgPerson, imgPerson2, imgPerson3 } from '@/data/images';
import type { StartProps } from '@/interfaces/ComponentsProps';

export const Example = ({ creepster }: StartProps) => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-4">Ve algunos ejemplos</h1>

      <div className="grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-4">
        <CardExample
          className={ `row-span-2 ${ creepster.className }`}
          name="Frankenstein"
          first_public_id={ imgPerson.first_id }
          second_public_id={ imgPerson.second_id }
        />

        <CardExample
          className={`${ creepster.className }`}
          name="Zombie"
          first_public_id={ imgPerson2.first_id }
          second_public_id={ imgPerson2.second_id}
        />

        <CardExample
          className={ `${creepster.className}` }
          name="Vampiro"
          first_public_id={ imgPerson3.first_id }
          second_public_id={ imgPerson3.second_id }
        />
      </div>
    </div>
  );
};