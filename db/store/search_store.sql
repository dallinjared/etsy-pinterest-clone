<<<<<<< HEAD
SELECT s.category, s.title, s.description, s.price, s.item_rating, s.media, s.post_id FROM store_product s
WHERE category || ' ' || title || ' ' || description || ' ' || price ILIKE $1;
=======
SELECT s.category, s.title, s.description, s.price, s.item_rating, s.post_id FROM store_product s
WHERE category || ' ' || title || ' ' || description || ' ' || price || ' ' || item_rating ILIKE $1;
SELECT s.category, s.title, s.description, s.price, s.item_rating, s.post_id FROM store_item s
WHERE category || ' ' || title || ' ' || description || ' ' || price ILIKE $1;
>>>>>>> eb57e71fb11a8fd7186ac53ff1b9811b89422c2a
