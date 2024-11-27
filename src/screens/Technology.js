/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Technology = () => {
  const navigation = useNavigation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const items = ['First item', 'Second item', 'Third item'];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* Header Section with Logo and Menu */}
        <View style={styles.header}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.logo}
          />
          <TouchableOpacity style={styles.menuButton} onPress={toggleDropdown}>
            <View style={styles.menuIcon} />
            <View style={styles.menuIcon} />
            <View style={styles.menuIcon} />
          </TouchableOpacity>
        </View>

        {/* Dropdown Menu */}
        {isDropdownVisible && (
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.dropdownText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigation.navigate('About')}>
              <Text style={styles.dropdownText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigation.navigate('Technology')}>
              <Text style={styles.dropdownText}>Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigation.navigate('Quality')}>
              <Text style={styles.dropdownText}>Quality Statement</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigation.navigate('SEO')}>
              <Text style={styles.dropdownText}>SEO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigation.navigate('Projects')}>
              <Text style={styles.dropdownText}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigation.navigate('Testimonials')}>
              <Text style={styles.dropdownText}>Testimonials</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigation.navigate('Contact')}>
              <Text style={styles.dropdownText}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* About Us Section */}
        <View style={styles.aboutUsSection}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/paper.jpg')}
              style={styles.icon}
            />
            <Text style={styles.aboutUsTitle}>Technology</Text>
          </View>

          <Text style={[styles.aboutUsText, {fontSize: 18}]}>
            Technology Works When It Streamlines Development and Maximizes
            Productivity & Quality
          </Text>
          <Text style={styles.aboutUsText}>
            TRZ Technologies has always been about enabling both our people and
            our applications/games to achieve their full potential. Over the
            years, we have engineered a complete framework for application/game
            development that exploits the strengths of industry standard
            software and overcomes its inherent limitations with proprietary
            tools and technologies.
          </Text>
          <Text style={styles.aboutUsText}>
            The result is our own truly unique and advanced hybrid system that
            facilitates the rapid development and deployment of high quality
            applications/games across multiple platforms.
          </Text>
          <Text style={[styles.aboutUsText, {fontWeight: 'bold'}]}>
            Agile Development: Scrum
          </Text>
          <Text style={styles.aboutUsText}>
            The Scrum process sets down a framework for organized agile
            development. It enforces daily communication within the development
            team and sets clear and manageable short-term goals. Every week to
            two weeks, the team goes through a full development cycle to produce
            testable subsets of the overall functional requirements. This
            creates a continuous feedback loop, which allows the project to
            adapt to changes, maintain the schedule and minimize risk.
          </Text>
          <Text style={[styles.aboutUsText, {fontWeight: 'bold'}]}>
            .NET Expertise
          </Text>
          <Text style={styles.aboutUsText}>
            TRZ Technologies has extensive experience with product and
            application development using .NET technologies. Our experience
            encompasses many domains including Repair & Maintenance, marketing
            applications and customer service portals.
          </Text>
          <Text style={styles.aboutUsText}>
            TRZ Technologies has trained developers who can help you with:
          </Text>
          <Text style={styles.aboutUsText}>
            • Scalable web-based products and applications using HTML5/CSS as
            well JQuery
          </Text>
          <Text style={styles.aboutUsText}>
            • Web services using .NET framework
          </Text>
          <Text style={styles.aboutUsText}>
            • Migrate legacy applications e.g. from ASP to ASP.NET
          </Text>
          <Text style={[styles.aboutUsText, {fontWeight: 'bold'}]}>
            Enterprise Resource Planning
          </Text>
          <Text style={styles.aboutUsText}>
            An ERP solution such as Oracle isn’t just the foundation of your
            software technology infrastructure, it’s deeply intertwined with
            your business. ERP’s financial tools allow companies to successfully
            maintain financial information like that of the assets, accounts,
            budgets and cash. ERP assists an organization in effectively
            managing the internal and external factors affecting it, while
            enhancing resource efficiency by eliminating time consuming
            activities and repetitive tasks.
          </Text>
          <Text style={styles.aboutUsText}>
            ERP also provides an important insight into organization’s materials
            management. It successfully automates the process of buying
            materials and maintaining them. There are modules track the
            purchased supplies and also calculate how the materials should be
            distributed. Moreover, you can effortlessly predict the demand of
            the market based on the history, economic statistics and sales data.
            This facilitates a company in their decision-making process for when
            a product production and provides a powerful competitive advantage
            by reducing “time to market” the products and/or services.
          </Text>
          <Text style={styles.aboutUsText}>
            With our strong expertise in large global ERP implementations,
            experts at TRZ Technologies can execute the process using the cross
            functional knowledge of various market verticals. Our qualified
            business analysts, software engineers, and subject matter experts
            have prior experience of successful product implementations using a
            variety of ERP systems and industry specific solutions.
          </Text>
          <Text style={[styles.aboutUsText, {fontWeight: 'bold'}]}>
            Mobile Development
          </Text>
          <Text style={styles.aboutUsText}>
            TRZ Technologies build high-performing mobile applications for
            native iOS (iPhone, iPod Touch & iPad) and Android (HTC, Samsung,
            etc.) coding as well as cross-platform (HTML5) development.
          </Text>
          <Text style={[styles.aboutUsText, {fontWeight: 'bold'}]}>
            Hybrid Apps
          </Text>
          <Text style={styles.aboutUsText}>
            For Hybrid App development TRZ Technologies is using React Native
            framework. React Native is a prominent open-source project of
            Facebook. It is ideal for developing mobile apps by using the
            popular and fast-growing React library.
          </Text>
          <Text style={styles.aboutUsText}>
            TRZ Technologies has transformed the mobile app development with
            higher speed and performance.
          </Text>
          <Text style={styles.aboutUsText}>
            React Native combines the best parts of native development with
            React, a best-in-class JavaScript library for building user
            interfaces.
          </Text>
          <Text style={styles.aboutUsText}>
            In 2018, React Native had the 2nd highest number of contributors for
            any repository in GitHub. Today, React Native is supported by
            contributions from individuals and companies around the world
            including Callstack, Expo, Infinite Red, Microsoft and Software
            Mansion.
          </Text>
          <Text style={[styles.aboutUsText, {fontWeight: 'bold'}]}>
            Native Development For Everyone
          </Text>
          <Text style={[styles.aboutUsText, {}]}>
            React Native lets you create truly native apps and doesn’t
            compromise your users’ experiences. It provides a core set of
            platform agnostic native components like View, Text, and Image that
            map directly to the platform’s native UI building blocks.
          </Text>
          <Text style={[styles.aboutUsText, {fontWeight: 'bold'}]}>
            Fast Refresh
          </Text>
          <Text style={[styles.aboutUsText, {}]}>
            See your changes as soon as you save. With the power of JavaScript,
            React Native lets you iterate at lightning speed. No more waiting
            for native builds to finish. Save, see, repeat.
          </Text>
          <Text style={[styles.aboutUsText, {fontWeight: 'bold'}]}>
            Web Application Development
          </Text>
          <Text style={[styles.aboutUsText, {}]}>
            From a feature packed marketing campaign, to a simple startup
            solution, our team can build it. We have built large systems of
            online and offline desktop and web applications connected to an
            online server. The aim is to create a seamless user experience
            across all platforms that accommodates the ease-of-use for all
            stakeholders
          </Text>
        </View>

        {/* Touchable Texts Below Footer */}
        <View style={styles.footer}>
          <View style={styles.footerSection}>
            <View style={styles.footerHeader}>
              <View style={styles.ellipse}>
                <Text style={styles.ellipseText}>⋮⋮⋮⋮</Text>
              </View>
              <Text style={styles.footerTitle}>TRZ Technologies</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Text style={styles.footerLink}>{'>   '}About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
              <Text style={styles.footerLink}>{'>   '}Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
              <Text style={styles.footerLink}>{'>   '}Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Testimonials')}>
              <Text style={styles.footerLink}>{'>   '}Testimonials</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerSection}>
            <View style={styles.footerHeader}>
              <View style={styles.ellipse}>
                <Text style={styles.ellipseText}>⋮⋮⋮⋮</Text>
              </View>
              <Text style={styles.footerTitle}>Our Services</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SEO')}>
              <Text style={styles.footerLink}>{'>   '}SEO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Technology')}>
              <Text style={styles.footerLink}>{'>   '}Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quality')}>
              <Text style={styles.footerLink}>{'>   '}Quality Statement</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
              <Text style={styles.footerLink}>{'>   '}Projects</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerSearch}>
            <Text style={styles.searchLabel}>Search for:</Text>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Enter search query"
              />
              <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerBottom}>
            {/* Social Media Icons */}
            <View style={styles.socialIcons}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://twitter.com')}>
                <Image
                  source={require('../assets/images/twitter.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://facebook.com')}>
                <Image
                  source={require('../assets/images/facebook.jpg')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
            </View>

            {/* Copyright Text */}
            <Text style={styles.copyright}>© 2024 TRZ Technologies</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Technology;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // White background for the whole screen
  },
  scrollView: {
    flex: 1,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  aboutUsSection: {
    padding: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  aboutUsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutUsText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
  menuButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '10%',
    marginRight: 10, // Use marginRight instead of marginLeft for right-side alignment
    position: 'absolute',
    right: 10, // Position the menu button on the right side of the screen
    top: 100, // Adjust the top value as necessary
  },

  menuIcon: {
    backgroundColor: 'white',
    height: 3,
    width: 20,
    marginVertical: 2,
  },
  menuContainer: {
    position: 'absolute',
    top: 140,
    right: 20,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 0.5,
    elevation: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: '40%',
    zIndex: 2, // Ensure it's above the overlay
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent black
    zIndex: 1, // Below the menu container but above other content
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownText: {
    fontSize: 18,
    color: 'black',
  },
  imageContainer: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    paddingTop: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 10,
  },
  navigation: {
    position: 'absolute',
    top: '13%', // Center the buttons vertically
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%', // Full width to space buttons on either side
    zIndex: 2, // Ensure the buttons are above the image
  },
  navButton: {
    backgroundColor: 'transparent', // No background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    // borderColor: 'white', // Optional: if you want a border to show the button outline
    // borderWidth: 2, // Opti
  },
  navButtonText: {
    color: 'white',
    fontSize: 50,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 30,
    color: 'Darkgray',
    paddingTop: 20,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    padding: 10,
    textAlign: 'justify',
  },
  readMoreButton: {
    backgroundColor: 'black',
    height: 30,
    width: 120,
    alignSelf: 'center',
    borderRadius: 7,
  },
  readMoreText: {
    color: 'white',
    alignSelf: 'center',
    padding: 5,
  },
  footer: {
    backgroundColor: '#000000', // Ink black background color
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  footerSection: {
    marginBottom: 20,
  },

  footerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  ellipse: {
    marginRight: 8, // Space between the ellipse and title
  },

  ellipseText: {
    fontSize: 24,
    color: 'white',
  },

  footerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

  footerLink: {
    color: '#cccccc',
    fontSize: 16,
    marginBottom: 5,
    // textAlign:'center'
  },

  footerSearch: {
    marginTop: 20,
  },

  searchLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },

  searchButton: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 5,
  },

  searchButtonText: {
    color: 'white',
  },

  footerBottom: {
    alignItems: 'center',
    marginTop: 20,
  },

  copyright: {
    color: 'white',
    fontSize: 14,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  socialIcon: {
    width: 30, // Adjust icon size as needed
    height: 30,
    marginHorizontal: 10, // Space between icons
  },

  // eslint-disable-next-line no-dupe-keys
  copyright: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
});
