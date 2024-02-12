Câu lệnh khởi tạo dự án

```txt
npx react-native init eventhub --template react-native-template-typescript
```

lý do không nên dùng expo nó sẽ lấy toàn bộ các cái không cần thiết khiến app nặng hơn

prettierrc format code sao cho chuẩn

app.json khai báo thông tin của app name, display name hiển thị ra ngoài màn hình điện thoại

App.tsx đây là nơi sẽ làm điều hướng

index.js khai báo đăng ký cái app

package.jsox sử dụng để quản lý các cái gói thư viện

ts.config.json: hiểu được các file ts của mình

Đối với các thiết bị thật dùng khi nào?

- camera (quét mã Qr)
- thông báo
- location

rnfe (snipet)

View, Text là 1 component

Cấu hình 1 số thứ dùng chung:

- font chữ
- color

Phân tích:

Chia ra 2 loại:

Chưa đăng nhập sẽ ở màn hình Old navigator (chỉ được ở màn hình này khi chưa đăng nhập)

Đăng nhập sẽ ở màn hình navigator:

- Trong này lại chia làm 2: main navigator và tab navigator. Nhưng cái mà nằm ngoài tab thì nằm trong main navigator

npm i @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer react-native-gesture-handler react-native-reanimated

vào babel.config.js thêm

```txt
plugins: ['react-native-reanimated/plugin'],
```

Thư mục screen chứa:

- home: màn hình home...
- auth: chứa các màn hình đăng ký đăng nhập...

File index.ts trong screens để làm gì?

giúp hỗ trợ export các auth, home,... Khi dùng chỉ cần import screens thôi không cần phải đi xâu vào các cấp bên trong

```txt
<Stack.Navigator screenOptions={{headerShown: false}}></Stack.Navigator>

ẩn đi cái header mặc định
```

```js
/* eslint-disable prettier/prettier */
// import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
// import MainNavigator from './src/navigator/MainNavigator';
import AuthNavigator from './src/navigator/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;

```

Khởi chạy app thì mặc định true thì isShowSplash thế này sẽ hiển thị SplashScreen sau 1.5s thì chuyển hóa thành true, nó sẽ chạy đoạn NavigationContainer.

Dùng async-storage

npm i @react-native-async-storage/async-storage

Thứ tự trình bày code:

Các state

Các useEffect

Các Hàm

Tới return

