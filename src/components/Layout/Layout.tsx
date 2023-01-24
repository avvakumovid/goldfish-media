import { View } from 'react-native';
import { FC, PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#1E63EE',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Layout;
