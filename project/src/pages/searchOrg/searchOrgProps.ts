import { PropOptions } from 'vue';
import { Member } from './../../model/member';

export interface SearchOrhProps {
  searchTerm: PropOptions<String>;
  members: PropOptions<Member[]>;
  onUpdateSearchTerm: PropOptions<(newSearchTerm: string) => void>
}
