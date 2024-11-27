/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  TextInput,
} from 'react-native';
import { Linking } from 'react-native'; // Add this at the top for handling clicks on icons.
const App = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity value for the fade animation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  // Image sources for the onboarding effect
  const images = [
    require('../assets/images/image1.jpg'),
    require('../assets/images/image2.jpg'),
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Automatically change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Fade-in and fade-out effect when changing the image
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0, // Fade out
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade in
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentImageIndex, fadeAnim]); // Trigger animation when currentImageIndex changes

  // Functions to handle image navigation
  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={styles.scrollView}>
        <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logo}
        />

        {/* Hamburger Menu Button on the Left */}
        <TouchableOpacity style={styles.menuButton} onPress={toggleDropdown}>
          <View style={styles.menuIcon} />
          <View style={styles.menuIcon} />
          <View style={styles.menuIcon} />
        </TouchableOpacity>

        {/* Dropdown Menu Container */}
        {isDropdownVisible && (
          <Animated.View style={[styles.menuContainer, {zIndex: 1}]}>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Quality Statement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>SEO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Testimonials</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Contact Us</Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* Fade-in Scrolling Images */}
        <Animated.View style={[styles.imageContainer, {opacity: fadeAnim}]}>
          <Image source={images[currentImageIndex]} style={styles.image} />
        </Animated.View>

        {/* Forward and Backward Navigation Buttons */}
        <View style={styles.navigation}>
          <TouchableOpacity
            onPress={goToPreviousImage}
            style={styles.navButton}>
            <Text style={styles.navButtonText}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToNextImage} style={styles.navButton}>
            <Text style={styles.navButtonText}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* About Us Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.sectionText}>
            Experienced Leadership That Cultivates Creative Innovation To
            Achieve Excellence. TRZ Technologies is led by a team of industry
            professionals, each of whom has spent the greater part of his or her
            professional ...
          </Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              Read more{' >'}
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Technology Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technology</Text>
          <Text style={styles.sectionText}>
            Technology Works When It Streamlines Development and Maximizes
            Productivity & Quality. TRZ Technologies has always been about
            enabling both our people and our applications/games to achieve their
            full ...
          </Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              Read more{' >'}
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quality Statement Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quality Statement</Text>
          <Text style={styles.sectionText}>
            TRZ Technologies believes ‘A well trained motivated Employee results
            in a high Customer Satisfaction through better Quality of services.’
            Therefore, we provide our employees equal opportunities ...
          </Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              Read more{' >'}
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}

        {/* Touchable Texts Below Footer */}
        <View style={styles.footer}>
          <View style={styles.footerSection}>
            <View style={styles.footerHeader}>
              <View style={styles.ellipse}>
                <Text style={styles.ellipseText}>⋮⋮⋮⋮</Text>
              </View>
              <Text style={styles.footerTitle}>TRZ Technologies</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.footerLink}>{'>   '}About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>{'>   '}Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>{'>   '}Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
            <TouchableOpacity>
              <Text style={styles.footerLink}>{'>   '}SEO</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>{'>   '}Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>{'>   '}Quality Statement</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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

export default App;

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
  top: 140, // Adjust the top value as necessary to position the dropdown below the menu button
  right: 20, // Align the dropdown menu to the right side
  backgroundColor: 'white',
  shadowColor: 'gray',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.1,
  shadowRadius: 5,
  borderWidth: 0.5,
  elevation: 5, // For Android shadow
  borderBottomRightRadius:10,
  borderBottomLeftRadius:10,
  borderTopLeftRadius: 10,
  width: '40%', // Adjust width as necessary for the dropdown menu
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
    paddingTop:30,
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 10,
  },
  navigation: {
    position: 'absolute',
    top: '15%', // Center the buttons vertically
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

});