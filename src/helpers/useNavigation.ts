import { useNavigation } from '@react-navigation/native';
import { ActivitiesStack } from 'src/navigation/types';

const useMyNavigation = () => {
  const navigation = useNavigation<ActivitiesStack>();
  return navigation;
};

export default useMyNavigation;
