import $ from 'jquery';
import slick from 'slick-carousel';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import HeroSlider from './modules/HeroSlider';
import Responsive from './modules/Responsive';
import SlideOnScroll from './modules/SlideOnScroll';
import SlideOnScrollLeft from './modules/SlideOnScrollLeft';

var mobileMenu = new MobileMenu();
var stickyheader = new StickyHeader();
var modal = new Modal();
var heroSlider = new HeroSlider(); 
var responsive = new Responsive(); 
new RevealOnScroll($(".reveal-item"), "85%");
new SlideOnScroll($(".slideIn"), "75%"); 
new SlideOnScrollLeft($(".slideInLeft"), "75%");