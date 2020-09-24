import * as React from 'react';
import Navigation from '../navigation/navigation.component';
import Footer from '../footer/footer.component';

class UnAuthenticatedLayout extends React.Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Footer></Footer>
      </div>
    );
  }
}

export default UnAuthenticatedLayout;
