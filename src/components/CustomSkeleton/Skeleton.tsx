import * as React from 'react';
import { View } from 'react-native';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface CustomSkeletonProps {
  renderSkeleton: () => JSX.Element;
}

export const CustomSkeleton: React.FunctionComponent<CustomSkeletonProps> = ({
  renderSkeleton,
}) => {
  return <View>{renderSkeleton()}</View>;
};
