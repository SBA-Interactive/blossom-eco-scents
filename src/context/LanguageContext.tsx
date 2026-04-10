import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "gr";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  // Auth
  "auth.login": { en: "Login", gr: "Είσοδος" },
  "auth.signup": { en: "Sign Up", gr: "Εγγραφή" },
  "auth.logout": { en: "Logout", gr: "Αποσύνδεση" },
  "auth.profile": { en: "My Profile", gr: "Το Προφίλ μου" },
  "auth.wishlist": { en: "Wishlist", gr: "Λίστα Επιθυμιών" },
  "auth.cart": { en: "Shopping Cart", gr: "Καλάθι Αγορών" },
  "auth.language": { en: "Language", gr: "Γλώσσα" },
  "auth.theme": { en: "Theme", gr: "Θέμα" },
  "auth.light": { en: "Light", gr: "Φωτεινό" },
  "auth.dark": { en: "Dark", gr: "Σκοτεινό" },
  "auth.system": { en: "System", gr: "Σύστημα" },
  "auth.loginSignin": { en: "Login / Sign In", gr: "Είσοδος / Εγγραφή" },
  "auth.email": { en: "Email", gr: "Email" },
  "auth.password": { en: "Password", gr: "Κωδικός" },
  "auth.name": { en: "Full Name", gr: "Πλήρες Όνομα" },
  "auth.street": { en: "Street Address", gr: "Διεύθυνση" },
  "auth.city": { en: "City", gr: "Πόλη" },
  "auth.state": { en: "State/Province", gr: "Περιοχή" },
  "auth.postalCode": { en: "Postal Code", gr: "Ταχυδρομικός Κώδικας" },
  "auth.country": { en: "Country", gr: "Χώρα" },
  "auth.noAccount": { en: "Don't have an account?", gr: "Δεν έχετε λογαριασμό;" },
  "auth.haveAccount": { en: "Already have an account?", gr: "Έχετε ήδη λογαριασμό;" },
  "auth.registerTitle": { en: "Create Account", gr: "Δημιουργία Λογαριασμού" },
  "auth.loginTitle": { en: "Welcome Back", gr: "Καλωσήρθες" },
  "auth.loginSubtitle": { en: "Sign in to access your account", gr: "Συνδεθείτε για να αποκτήσετε πρόσβαση στον λογαριασμό σας" },
  "auth.registerSubtitle": { en: "Create an account to get started", gr: "Δημιουργήστε έναν λογαριασμό για να ξεκινήσετε" },
  "auth.shippingAddress": { en: "Shipping Address", gr: "Διεύθυνση Αποστολής" },
  "auth.invalidEmail": { en: "Invalid email address", gr: "Μη έγκυρη διεύθυνση email" },
  "auth.passwordMin": { en: "Password must be at least 6 characters", gr: "Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες" },
  "auth.fieldRequired": { en: "This field is required", gr: "Αυτό το πεδίο είναι υποχρεωτικό" },
  "auth.loginError": { en: "Invalid email or password", gr: "Μη έγκυρο email ή κωδικός" },
  "auth.registerError": { en: "Email already registered", gr: "Το email είναι ήδη εγγεγραμμένο" },
  "auth.profileTitle": { en: "My Profile", gr: "Το Προφίλ μου" },
  "auth.updateProfile": { en: "Update Profile", gr: "Ενημέρωση Προφίλ" },
  "auth.saved": { en: "Changes saved successfully", gr: "Οι αλλαγές αποθηκεύτηκαν επιτυχώς" },

  // Navbar
  "nav.home": { en: "Home", gr: "Αρχική" },
  "nav.products": { en: "Products", gr: "Προϊόντα" },
  "nav.about": { en: "About", gr: "Σχετικά" },
  "nav.pricing": { en: "Pricing", gr: "Τιμές" },
  "nav.contact": { en: "Contact", gr: "Επικοινωνία" },
  "nav.shopNow": { en: "Shop Now", gr: "Αγορά" },

  // Index
  "index.tagline": { en: "Sustainable · Natural · Eco-Friendly", gr: "Βιώσιμο · Φυσικό · Οικολογικό" },
  "index.heroTitle1": { en: "Fragrance from", gr: "Άρωμα από" },
  "index.heroTitle2": { en: "nature's", gr: "τα υπολείμματα" },
  "index.heroTitle3": { en: "leftovers", gr: "της φύσης" },
  "index.heroDesc": { en: "We transform fruit peels into premium, eco-friendly perfumes. Fresh scents, zero waste, safe for ages 10+.", gr: "Μετατρέπουμε φλούδες φρούτων σε premium, οικολογικά αρώματα. Φρέσκα αρώματα, μηδενικά απόβλητα, ασφαλή για ηλικίες 10+." },
  "index.exploreScents": { en: "Explore Scents", gr: "Εξερεύνηση Αρωμάτων" },
  "index.ourStory": { en: "Our Story", gr: "Η Ιστορία Μας" },
  "index.collection": { en: "Our Collection", gr: "Η Συλλογή Μας" },
  "index.collectionTitle": { en: "Scents that tell a story", gr: "Αρώματα που αφηγούνται μια ιστορία" },
  "index.viewAll": { en: "View All Products", gr: "Δείτε Όλα τα Προϊόντα" },
  "index.fromPeel": { en: "From peel to perfume", gr: "Από τη φλούδα στο άρωμα" },
  "index.peelDesc": { en: "Blossom was born from a simple idea: the peels we discard hold extraordinary fragrance potential. We cold-press citrus rinds, extract essential oils, and blend them into modern, wearable scents.", gr: "Το Blossom γεννήθηκε από μια απλή ιδέα: οι φλούδες που πετάμε κρύβουν εξαιρετικό αρωματικό δυναμικό. Ψυχροπιέζουμε φλοιούς εσπεριδοειδών, εξάγουμε αιθέρια έλαια και τα αναμειγνύουμε σε μοντέρνα αρώματα." },
  "index.learnMore": { en: "Learn More", gr: "Μάθετε Περισσότερα" },
  "index.stayInBloom": { en: "Stay in bloom", gr: "Μείνετε σε άνθηση" },
  "index.newsletterDesc": { en: "Be the first to discover new scents, seasonal collections, and exclusive offers.", gr: "Γίνετε οι πρώτοι που θα ανακαλύψετε νέα αρώματα, εποχιακές συλλογές και αποκλειστικές προσφορές." },
  "index.subscribe": { en: "Subscribe", gr: "Εγγραφή" },

  // Products
  "products.collection": { en: "Our Collection", gr: "Η Συλλογή Μας" },
  "products.title": { en: "The Blossom Line", gr: "Η Σειρά Blossom" },
  "products.desc": { en: "Each fragrance is crafted from upcycled fruit peels. 100% natural, chemical-free, and safe for ages 10+.", gr: "Κάθε άρωμα δημιουργείται από ανακυκλωμένες φλούδες φρούτων. 100% φυσικό, χωρίς χημικά, ασφαλές για ηλικίες 10+." },
  "products.filter": { en: "Filter", gr: "Φίλτρο" },
  "products.allScents": { en: "All Scents", gr: "Όλα τα Αρώματα" },
  "products.allSizes": { en: "All Sizes", gr: "Όλα τα Μεγέθη" },
  "products.default": { en: "Default", gr: "Προεπιλογή" },
  "products.priceLowHigh": { en: "Price: Low → High", gr: "Τιμή: Χαμηλή → Υψηλή" },
  "products.priceHighLow": { en: "Price: High → Low", gr: "Τιμή: Υψηλή → Χαμηλή" },
  "products.nameAZ": { en: "Name: A → Z", gr: "Όνομα: Α → Ω" },
  "products.nameZA": { en: "Name: Z → A", gr: "Όνομα: Ω → Α" },
  "products.wishlist": { en: "Wishlist", gr: "Λίστα Επιθυμιών" },
  "products.noMatch": { en: "No products match your filters.", gr: "Κανένα προϊόν δεν ταιριάζει με τα φίλτρα σας." },
  "products.notes": { en: "Notes", gr: "Νότες" },
  "products.addToCart": { en: "Add to Cart", gr: "Προσθήκη στο Καλάθι" },
  "products.backToProducts": { en: "Back to Products", gr: "Πίσω στα Προϊόντα" },
  "products.ingredients": { en: "Ingredients", gr: "Συστατικά" },

  // About
  "about.ourStory": { en: "Our Story", gr: "Η Ιστορία Μας" },
  "about.title": { en: "From peel to perfume", gr: "Από τη φλούδα στο άρωμα" },
  "about.desc1": { en: "Blossom was born from a simple idea: the peels we discard hold extraordinary fragrance potential. We cold-press citrus rinds, extract essential oils from fruit skins, and blend them into modern, wearable scents — no synthetic chemicals, no waste.", gr: "Το Blossom γεννήθηκε από μια απλή ιδέα: οι φλούδες που πετάμε κρύβουν εξαιρετικό αρωματικό δυναμικό. Ψυχροπιέζουμε φλοιούς εσπεριδοειδών, εξάγουμε αιθέρια έλαια και τα αναμειγνύουμε σε μοντέρνα αρώματα — χωρίς συνθετικά χημικά, χωρίς σπατάλη." },
  "about.desc2": { en: "Founded with a passion for sustainability and a love for fresh, fruity aromas, we believe luxury fragrance should never come at the planet's expense.", gr: "Ιδρύθηκε με πάθος για τη βιωσιμότητα και αγάπη για φρέσκα, φρουτώδη αρώματα. Πιστεύουμε ότι η πολυτελής αρωματοποιία δεν πρέπει ποτέ να γίνεται εις βάρος του πλανήτη." },
  "about.values": { en: "What We Stand For", gr: "Τι Πρεσβεύουμε" },
  "about.valuesTitle": { en: "Our values", gr: "Οι αξίες μας" },
  "about.natural": { en: "100% Natural", gr: "100% Φυσικό" },
  "about.naturalDesc": { en: "Made exclusively from fruit peels and plant-based ingredients.", gr: "Κατασκευασμένο αποκλειστικά από φλούδες φρούτων και φυτικά συστατικά." },
  "about.zeroWaste": { en: "Zero Waste", gr: "Μηδενικά Απόβλητα" },
  "about.zeroWasteDesc": { en: "We upcycle what others throw away into something beautiful.", gr: "Ανακυκλώνουμε αυτό που άλλοι πετάνε σε κάτι όμορφο." },
  "about.safeForAll": { en: "Safe for All", gr: "Ασφαλές για Όλους" },
  "about.safeForAllDesc": { en: "Gentle, chemical-free formulas suitable for ages 10 and up.", gr: "Ήπιες, χωρίς χημικά συνταγές κατάλληλες για ηλικίες 10+." },
  "about.ecoFriendly": { en: "Eco-Friendly", gr: "Οικολογικό" },
  "about.ecoFriendlyDesc": { en: "Recyclable packaging and a carbon-conscious supply chain.", gr: "Ανακυκλώσιμη συσκευασία και αλυσίδα εφοδιασμού με περιβαλλοντική συνείδηση." },
  "about.howItWorks": { en: "How It Works", gr: "Πώς Λειτουργεί" },
  "about.process": { en: "Our process", gr: "Η διαδικασία μας" },
  "about.sourcing": { en: "Sourcing", gr: "Προμήθεια" },
  "about.sourcingDesc": { en: "We partner with local farms and juice producers to collect fresh fruit peels that would otherwise go to waste.", gr: "Συνεργαζόμαστε με τοπικά αγροκτήματα και παραγωγούς χυμών για τη συλλογή φρέσκων φλούδων φρούτων." },
  "about.extraction": { en: "Extraction", gr: "Εξαγωγή" },
  "about.extractionDesc": { en: "Using cold-press technology, we extract pure essential oils from the peels, preserving their natural fragrance.", gr: "Χρησιμοποιώντας τεχνολογία ψυχρής πίεσης, εξάγουμε αγνά αιθέρια έλαια διατηρώντας το φυσικό τους άρωμα." },
  "about.blending": { en: "Blending", gr: "Ανάμειξη" },
  "about.blendingDesc": { en: "Our perfumers carefully blend extracted oils into unique, modern scent compositions.", gr: "Οι αρωματοποιοί μας αναμειγνύουν προσεκτικά τα εξαγόμενα έλαια σε μοναδικές, μοντέρνες αρωματικές συνθέσεις." },
  "about.bottling": { en: "Bottling", gr: "Εμφιάλωση" },
  "about.bottlingDesc": { en: "Each fragrance is hand-bottled in recyclable glass, ready to bring nature's best to your everyday routine.", gr: "Κάθε άρωμα εμφιαλώνεται χειροποίητα σε ανακυκλώσιμο γυαλί, έτοιμο να φέρει τα καλύτερα της φύσης στην καθημερινότητά σας." },
  "about.readyToBloom": { en: "Ready to bloom?", gr: "Έτοιμοι να ανθίσετε;" },
  "about.readyDesc": { en: "Discover our collection of natural, fruit-peel fragrances.", gr: "Ανακαλύψτε τη συλλογή μας από φυσικά αρώματα φλούδας φρούτων." },

  // Pricing
  "pricing.title": { en: "Pricing", gr: "Τιμές" },
  "pricing.heading": { en: "Find your perfect fit", gr: "Βρείτε την ιδανική επιλογή" },
  "pricing.desc": { en: "Whether you want to try one scent or collect them all, we have an option for you.", gr: "Είτε θέλετε να δοκιμάσετε ένα άρωμα είτε να τα συλλέξετε όλα, έχουμε μια επιλογή για εσάς." },
  "pricing.singleScent": { en: "Single Scent", gr: "Μονό Άρωμα" },
  "pricing.singleDesc": { en: "Perfect for trying your first Blossom fragrance.", gr: "Ιδανικό για να δοκιμάσετε το πρώτο σας άρωμα Blossom." },
  "pricing.scentTrio": { en: "Scent Trio", gr: "Τρίο Αρωμάτων" },
  "pricing.trioDesc": { en: "All three signature scents at a special bundle price.", gr: "Και τα τρία αρώματα σε ειδική τιμή πακέτου." },
  "pricing.bloomClub": { en: "Bloom Club", gr: "Bloom Club" },
  "pricing.clubDesc": { en: "A new seasonal scent delivered to your door every month.", gr: "Ένα νέο εποχιακό άρωμα στην πόρτα σας κάθε μήνα." },
  "pricing.oneTime": { en: "one-time", gr: "εφάπαξ" },
  "pricing.perMonth": { en: "/month", gr: "/μήνα" },
  "pricing.shopNow": { en: "Shop Now", gr: "Αγορά" },
  "pricing.getTrio": { en: "Get the Trio", gr: "Αποκτήστε το Τρίο" },
  "pricing.joinClub": { en: "Join the Club", gr: "Γίνετε Μέλος" },
  "pricing.feature.1frag": { en: "1 fragrance (50ml)", gr: "1 άρωμα (50ml)" },
  "pricing.feature.recyclable": { en: "Recyclable glass bottle", gr: "Ανακυκλώσιμο γυάλινο μπουκάλι" },
  "pricing.feature.freeOver50": { en: "Free shipping over $50", gr: "Δωρεάν αποστολή άνω των $50" },
  "pricing.feature.giftReady": { en: "Gift-ready packaging", gr: "Συσκευασία δώρου" },
  "pricing.feature.3frags": { en: "3 fragrances (50ml each)", gr: "3 αρώματα (50ml το καθένα)" },
  "pricing.feature.recyclables": { en: "Recyclable glass bottles", gr: "Ανακυκλώσιμα γυάλινα μπουκάλια" },
  "pricing.feature.freeShipping": { en: "Free shipping included", gr: "Δωρεάν αποστολή" },
  "pricing.feature.premiumBox": { en: "Premium gift box", gr: "Premium κουτί δώρου" },
  "pricing.feature.save19": { en: "Save $19", gr: "Εξοικονομήστε $19" },
  "pricing.feature.seasonal": { en: "1 seasonal fragrance/month", gr: "1 εποχιακό άρωμα/μήνα" },
  "pricing.feature.exclusive": { en: "Exclusive limited editions", gr: "Αποκλειστικές περιορισμένες εκδόσεις" },
  "pricing.feature.freeAlways": { en: "Free shipping always", gr: "Πάντα δωρεάν αποστολή" },
  "pricing.feature.cancel": { en: "Cancel anytime", gr: "Ακύρωση ανά πάσα στιγμή" },
  "pricing.feature.membersOnly": { en: "Members-only discounts", gr: "Εκπτώσεις αποκλειστικά για μέλη" },

  // Contact
  "contact.getInTouch": { en: "Get in Touch", gr: "Επικοινωνήστε Μαζί Μας" },
  "contact.title": { en: "We'd love to hear from you", gr: "Θα χαρούμε να σας ακούσουμε" },
  "contact.desc": { en: "Questions about our products, wholesale inquiries, or just want to say hello? Drop us a message.", gr: "Ερωτήσεις για τα προϊόντα μας, ερωτήσεις χονδρικής ή απλά θέλετε να πείτε ένα γεια; Στείλτε μας μήνυμα." },
  "contact.thankYou": { en: "Thank you ✦", gr: "Ευχαριστούμε ✦" },
  "contact.thankYouDesc": { en: "We'll get back to you within 24 hours.", gr: "Θα σας απαντήσουμε εντός 24 ωρών." },
  "contact.name": { en: "Name", gr: "Όνομα" },
  "contact.email": { en: "Email", gr: "Email" },
  "contact.message": { en: "Your message", gr: "Το μήνυμά σας" },
  "contact.send": { en: "Send Message", gr: "Αποστολή Μηνύματος" },
  "contact.emailLabel": { en: "Email", gr: "Email" },
  "contact.location": { en: "Location", gr: "Τοποθεσία" },
  "contact.social": { en: "Social", gr: "Κοινωνικά" },

  // Checkout
  "checkout.title": { en: "Checkout", gr: "Ολοκλήρωση Παραγγελίας" },
  "checkout.orderConfirmed": { en: "Order Confirmed!", gr: "Η Παραγγελία Επιβεβαιώθηκε!" },
  "checkout.placeholderMsg": { en: "This is a placeholder confirmation. No real payment was processed.", gr: "Αυτή είναι μια ενδεικτική επιβεβαίωση. Δεν πραγματοποιήθηκε πληρωμή." },
  "checkout.continueShopping": { en: "Continue Shopping", gr: "Συνέχεια Αγορών" },
  "checkout.emptyCart": { en: "Your cart is empty", gr: "Το καλάθι σας είναι άδειο" },
  "checkout.browseProducts": { en: "Browse Products", gr: "Περιήγηση Προϊόντων" },
  "checkout.secureCheckout": { en: "Secure Checkout (Placeholder)", gr: "Ασφαλής Ολοκλήρωση (Ενδεικτικό)" },
  "checkout.firstName": { en: "First Name", gr: "Όνομα" },
  "checkout.lastName": { en: "Last Name", gr: "Επώνυμο" },
  "checkout.address": { en: "Address", gr: "Διεύθυνση" },
  "checkout.city": { en: "City", gr: "Πόλη" },
  "checkout.postalCode": { en: "Postal Code", gr: "Ταχυδρομικός Κώδικας" },
  "checkout.paymentDetails": { en: "Payment Details", gr: "Στοιχεία Πληρωμής" },
  "checkout.cardNumber": { en: "Card Number", gr: "Αριθμός Κάρτας" },
  "checkout.expiry": { en: "Expiry", gr: "Λήξη" },
  "checkout.placeOrder": { en: "Place Order", gr: "Υποβολή Παραγγελίας" },
  "checkout.demo": { en: "This is a demo. No real payment will be processed.", gr: "Αυτό είναι demo. Δεν θα γίνει πραγματική πληρωμή." },
  "checkout.orderSummary": { en: "Order Summary", gr: "Σύνοψη Παραγγελίας" },
  "checkout.subtotal": { en: "Subtotal", gr: "Υποσύνολο" },
  "checkout.shipping": { en: "Shipping", gr: "Αποστολή" },
  "checkout.free": { en: "Free", gr: "Δωρεάν" },
  "checkout.total": { en: "Total", gr: "Σύνολο" },

  // Order Single
  "orderSingle.tag": { en: "Single Scent", gr: "Μονό Άρωμα" },
  "orderSingle.title": { en: "Choose your fragrance", gr: "Επιλέξτε το άρωμά σας" },
  "orderSingle.desc": { en: "Select one signature scent to add to your order.", gr: "Επιλέξτε ένα άρωμα για να προσθέσετε στην παραγγελία σας." },
  "orderSingle.shipping": { en: "Shipping", gr: "Αποστολή" },
  "orderSingle.addCheckout": { en: "Add to Cart & Checkout", gr: "Προσθήκη & Ολοκλήρωση" },

  // Order Trio
  "orderTrio.tag": { en: "Scent Trio", gr: "Τρίο Αρωμάτων" },
  "orderTrio.title": { en: "Pick your three", gr: "Επιλέξτε τα τρία σας" },
  "orderTrio.desc": { en: "Select all three signature scents for the bundle price of", gr: "Επιλέξτε και τα τρία αρώματα στην τιμή πακέτου" },
  "orderTrio.bundlePrice": { en: "Bundle price", gr: "Τιμή πακέτου" },
  "orderTrio.shipping": { en: "Shipping", gr: "Αποστολή" },
  "orderTrio.youSave": { en: "You save", gr: "Εξοικονομείτε" },
  "orderTrio.selected": { en: "selected", gr: "επιλεγμένα" },
  "orderTrio.addCheckout": { en: "Add Trio to Cart & Checkout", gr: "Προσθήκη Τρίο & Ολοκλήρωση" },

  // Subscribe
  "subscribe.tag": { en: "Bloom Club", gr: "Bloom Club" },
  "subscribe.title": { en: "Join the Club", gr: "Γίνετε Μέλος" },
  "subscribe.desc": { en: "$38/month — a new seasonal fragrance delivered to your door. Cancel anytime.", gr: "$38/μήνα — ένα νέο εποχιακό άρωμα στην πόρτα σας. Ακύρωση ανά πάσα στιγμή." },
  "subscribe.whatsIncluded": { en: "What's included", gr: "Τι περιλαμβάνεται" },
  "subscribe.fullName": { en: "Full Name", gr: "Ονοματεπώνυμο" },
  "subscribe.cardPlaceholder": { en: "Card Number (placeholder)", gr: "Αριθμός Κάρτας (ενδεικτικό)" },
  "subscribe.monthly": { en: "Monthly subscription", gr: "Μηνιαία συνδρομή" },
  "subscribe.shipping": { en: "Shipping", gr: "Αποστολή" },
  "subscribe.cta": { en: "Subscribe — $38/mo", gr: "Εγγραφή — $38/μήνα" },
  "subscribe.welcome": { en: "Welcome to Bloom Club!", gr: "Καλώς ήρθατε στο Bloom Club!" },
  "subscribe.welcomeDesc": { en: "This is a placeholder confirmation. No real payment was processed. You'd receive your first seasonal scent soon!", gr: "Αυτή είναι μια ενδεικτική επιβεβαίωση. Δεν πραγματοποιήθηκε πληρωμή. Θα λάβετε σύντομα το πρώτο σας εποχιακό άρωμα!" },
  "subscribe.backHome": { en: "Back to Home", gr: "Επιστροφή στην Αρχική" },

  // Cart Drawer
  "cart.title": { en: "Your Cart", gr: "Το Καλάθι Σας" },
  "cart.empty": { en: "Your cart is empty", gr: "Το καλάθι σας είναι άδειο" },
  "cart.total": { en: "Total", gr: "Σύνολο" },
  "cart.checkout": { en: "Checkout", gr: "Ολοκλήρωση" },

  // Footer
  "footer.rights": { en: "© 2026 Blossom. All rights reserved.", gr: "© 2026 Blossom. Με επιφύλαξη παντός δικαιώματος." },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("blossom-lang") as Language) || "en";
    }
    return "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("blossom-lang", lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
