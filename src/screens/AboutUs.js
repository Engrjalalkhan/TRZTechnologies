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
const AboutUsScreen = () => {
  const navigation = useNavigation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

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
            <Text style={styles.aboutUsTitle}>About Us</Text>
          </View>

          <Text style={styles.aboutUsText}>
            Experienced Leadership That Cultivates Creative Innovation To
            Achieve Excellence.
          </Text>
          <Text style={styles.aboutUsText}>
            TRZ Technologies is led by a team of industry professionals, each of
            whom has spent the greater part of his or her professional life
            immersed in the IT industry. Their collective insight and knowledge
            has resulted in a business model that is uniquely their own. Their
            approach is to develop and deploy technology as a means to
            facilitate productivity, remove barriers, and enable highly skilled
            employees to express their creativity to its fullest extent.
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

export default AboutUsScreen;

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
    paddingTop:10
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
