// Timo Training Logbook 3.6 app logic
// ===== APP CONSTANTS =====
const SEED_DATA = {"note_w1_mon_squat": "+ 25 pull aparts + 5 pull-up iga seti järel", "note_w1_mon_pause_sq": "+ 4 pull-up iga seti järel", "note_w1_mon_cond": "1000m rowing", "note_w1_tue_cond": "Rowing 3×50 sek @ 2 min puhkus", "note_w1_wed_rec": "Kõndimine + sprint 30 sek iga 2:30 järel — 35 min", "note_w1_thu_deadlift": "+ 25 pull aparts iga seti järel", "note_w1_thu_cond": "Rowing — tehtud", "note_w1_fri_cond": "Bike 3×60 sek @ 60 km/h", "sc_w1_mon_squat": 3, "sc_w1_mon_pause_sq": 4, "sc_w1_mon_rev_lunge": 3, "sc_w1_thu_split_sq": 2, "sc_w1_thu_sldl": 2, "sc_w1_thu_ab_wheel": 4, "sc_w1_thu_db_row": 4, "sc_w1_tue_chin_hold": 4, "sc_w1_tue_pull_aparts": 4, "sc_w1_fri_seated_press": 2, "sc_w1_fri_chin_ups": 2, "sc_w1_fri_dips": 2, "sc_w1_fri_hammer": 2, "sc_w1_fri_bent_raise": 2, "sc_w2_mon_pause_sq": 5, "note_w2_mon_squat": "4 pull-ups, 25 pull-aparts, 1 set every 3:30", "sc_w2_mon_rev_lunge": 2, "note_w2_mon_cond": "4x250 row, 1 min rest", "sc_w2_tue_strict_press": 4, "sc_w2_tue_chin_hold": 1, "note_w2_tue_chin_hold": "4x20 sec over bar hold", "note_w2_tue_pull_aparts": "4x20", "note_w2_tue_strict_press": "A1-A3 Superset after 75-90 sec", "sc_w2_tue_pull_aparts": 1, "note_w2_tue_pull_up": "Bodyweight", "note_w2_tue_incline_db": "B1 & B2 every 1:45 min", "sc_w2_tue_lat_raise": 2, "sc_w2_tue_ez_curl": 2, "note_w2_tue_ez_curl": "2 min interval", "sc_w2_tue_pushup": 2, "note_w2_tue_pushup": "Bodyweight", "note_w2_tue_cond": "Walking 5 min & 3z12 leg raises", "note_w2_wed_rec": "30 min treadmill, sprint 30 sec after every 2:30 min", "note_w2_thu_deadlift": "25 pull-aparts, 1 set after every 3 min", "sc_w2_thu_split_sq": 3, "exname_w2_thu_sldl": "Barbell shrug", "sc_w2_thu_sldl": 3, "exname_w2_thu_ab_wheel": "Ab Roll out", "sc_w2_thu_ab_wheel": 3, "note_w2_thu_ab_wheel": "Bodyweight", "sc_w2_thu_db_row": 3, "note_w2_thu_cond": "Bike for 6 times level 5 for 1 min sprint", "sc_w2_fri_bench": 4, "note_w2_fri_bench": "20 pull-aparts after each set", "note_w2_fri_chin_ups": "Bodyweight", "note_w2_fri_dips": "Bodyweight, C1 & C2 & C2 after every 1:15", "note_w2_fri_seated_press": "B1 & B2 Superset after every 1:45", "note_w2_fri_cond": "Rowing, Sprint & etc", "exlabel_w2_mon_rev_lunge": "C", "exlabel_w2_thu_split_sq": "B", "exlabel_w2_thu_sldl": "C1", "exlabel_w2_thu_ab_wheel": "C2", "exlabel_w2_thu_db_row": "C3", "sc_w3_mon_squat": 5, "note_w3_mon_squat": "25 pull-aparts after each set + 2 pull-ups", "sc_w3_mon_pause_sq": 6, "interval_w3_mon_pause_sq": "2:30", "exname_w3_mon_rev_lunge": "Metcon", "exlabel_w3_mon_rev_lunge": "C", "note_w3_mon_rev_lunge": "50 cal row", "sc_w3_mon_rev_lunge": 2, "note_w3_mon_cond": "Cool down", "sc_w3_tue_strict_press": 6, "sc_w3_tue_chin_hold": 6, "note_w3_tue_chin_hold": "6x10 sec", "note_w3_tue_strict_press": "A1 - A3 after every 75 sec", "sc_w3_tue_pull_aparts": 6, "interval_w3_tue_strict_press": "1:15", "interval_w3_tue_chin_hold": "1:15", "interval_w3_tue_pull_aparts": "1:15", "note_w3_tue_pull_aparts": "6x20 pull-aparts", "interval_w3_tue_incline_db": "1:45", "interval_w3_tue_pull_up": "1:45", "note_w3_tue_pull_up": "3x10 oli kavas ette nähtud, bodyweight", "sc_w3_tue_lat_raise": 6, "exname_w3_tue_ez_curl": "KB Towel Curl", "sc_w3_tue_ez_curl": 2, "sc_w3_tue_pushup": 2, "note_w3_tue_pushup": "Bodyweight", "note_w3_tue_cond": "15 cal walk", "note_w3_wed_rec": "Running & Walking = 45 min", "note_w3_thu_deadlift": "4x25 pull aparts after each set, 1 set after every 3 min", "sc_w3_thu_deadlift": 4, "sc_w3_thu_split_sq": 3, "note_w3_thu_split_sq": "Bodyweight", "exss_w3_thu_deadlift": "", "exlabel_w3_thu_sldl": "C1", "exname_w3_thu_sldl": "Barbell shrug", "sc_w3_thu_sldl": 3, "exss_w3_thu_sldl": "C1", "exname_w3_thu_ab_wheel": "Ab Roll out", "sc_w3_thu_ab_wheel": 3, "exss_w3_thu_ab_wheel": "C2", "exss_w3_thu_db_row": "C3", "sc_w3_thu_db_row": 3, "note_w3_thu_sldl": "Rest as needed between the sets", "note_w3_thu_ab_wheel": "Rest as needed between the sets", "note_w3_thu_db_row": "Rest as needed between the sets", "note_w3_thu_cond": "Running for calories 15-12-9", "exname_w3_fri_hammer": "Seated DB Hammer Curls", "sc_w3_fri_bench": 5, "note_w3_fri_bench": "20 pull-aparts after each set", "sc_w3_fri_seated_press": 3, "sc_w3_fri_chin_ups": 3, "note_w3_fri_chin_ups": "Bodyweight", "sc_w3_fri_dips": 3, "note_w3_fri_dips": "Bodyweight", "sc_w3_fri_hammer": 3, "note_w3_fri_hammer": "Until failure", "sc_w3_fri_bent_raise": 3, "note_w3_fri_bent_raise": "Until failure", "interval_w3_fri_dips": "1:15", "interval_w3_fri_hammer": "1:15", "interval_w3_fri_bent_raise": "1:15", "note_w3_fri_cond": "Bike 10x10 AFAP", "sc_w4_mon_squat": 5, "note_w4_mon_squat": "50/60% from max 1 rep, 20 pull-aparts", "exname_w4_mon_pause_sq": "Leg press", "exlabel_w4_mon_pause_sq": "B", "exlabel_w4_mon_rev_lunge": "C", "exname_w4_mon_rev_lunge": "Strength Accessory/Walking lunges", "note_w4_mon_rev_lunge": "10 back extensions, 1 round after 3 min", "interval_w4_mon_rev_lunge": "3:00", "exname_w4_mon_cond": "Metcon", "note_w4_mon_cond": "Sprint for 15 cal x 4 times", "note_w4_tue_strict_press": "5x5 50/60%, ", "sc_w4_tue_strict_press": 5, "sc_w4_tue_chin_hold": 5, "note_w4_tue_chin_hold": "15 sec hold on top", "sc_w4_tue_pull_aparts": 5, "note_w4_tue_pull_aparts": "20 pulla-aparts", "exname_w4_tue_incline_db": "Strict pugh-up", "note_w4_tue_pull_up": "3x 5-8", "exname_w4_tue_lat_raise": "Strength circuit", "exlabel_w4_tue_lat_raise": "C", "exlabel_w4_tue_ez_curl": "D", "note_w4_wed_rec": "Walking or running for 30 - 45 min", "sc_w4_thu_deadlift": 6, "note_w4_thu_deadlift": "6x8 roll outs", "exname_w4_thu_split_sq": "DB Reverse Lunge", "sc_w4_thu_split_sq": 3, "exname_w4_thu_sldl": "Shrug", "sc_w4_thu_sldl": 3, "note_w4_thu_split_sq": "B1 - B2 after every 1:45 min", "note_w4_thu_sldl": "B1 - B2 after every 1:45 min", "exname_w4_thu_ab_wheel": "Conditioning", "exlabel_w4_thu_ab_wheel": "C", "sc_w4_thu_ab_wheel": 1, "note_w4_thu_ab_wheel": "10x30 sec sprint", "sc_w4_fri_bench": 6, "note_w4_fri_bench": "22 kg Seal DB row after each set", "exname_w4_fri_seated_press": "Pike push-up", "sc_w4_fri_seated_press": 3, "exname_w4_fri_chin_ups": "False Ring pull-up", "sc_w4_fri_chin_ups": 3, "exlabel_w4_fri_cond": "C", "note_w4_fri_cond": "20 double down followed dips AMAP", "hidden_w4_thu_cond": true, "hidden_w4_thu_db_row": true, "hidden_w4_fri_dips": true, "hidden_w4_fri_hammer": true, "hidden_w4_fri_bent_raise": true, "sc_w9_mon_squat": 6, "exname_w9_mon_pause_sq": "Front squat", "exname_w9_mon_rev_lunge": "Conditioning", "exlabel_w9_mon_rev_lunge": "C", "exname_w9_mon_cond": "Cool down", "note_w9_mon_squat": "20 pull-aparts, x3 pull-upd", "sc_w9_mon_rev_lunge": 1, "note_w9_mon_rev_lunge": "7 min row + 7 min sprint", "note_w9_mon_cond": "5 min bike", "hidden_w9_tue_pull_aparts": true, "hidden_w9_tue_chin_hold": true, "exname_w9_tue_incline_db": "Low incline DB Bench Press", "hidden_w9_tue_lat_raise": true, "hidden_w9_tue_ez_curl": true, "hidden_w9_tue_pushup": true, "sc_w9_tue_strict_press": 6, "note_w9_tue_strict_press": "10,8,6,5,5,5 pull-ups after every 1:45 min", "note_w9_tue_incline_db": "3z12-15", "note_w9_tue_pull_up": "3x6-9", "note_w9_tue_cond": "8-7-6-5-4-3-2-1 with 25 double under DB squat", "note_w9_wed_rec": "Bike & Walk & Run for 30-45 min + Stretch", "hidden_w9_thu_split_sq": true, "hidden_w9_thu_sldl": true, "exname_w9_thu_ab_wheel": "DB reverse lunge", "exname_w9_thu_db_row": "Shrug", "sc_w9_thu_deadlift": 6, "note_w9_thu_deadlift": "6x8 roll outs", "sc_w9_thu_ab_wheel": 3, "exlabel_w9_thu_ab_wheel": "B1", "exlabel_w9_thu_db_row": "B2", "sc_w9_thu_db_row": 3, "note_w9_thu_cond": "10x30 sprint on bike", "exname_w9_fri_seated_press": "Pike push-ups", "exname_w9_fri_chin_ups": "False grip Ring Pull up", "hidden_w9_fri_dips": true, "hidden_w9_fri_hammer": true, "hidden_w9_fri_bent_raise": true, "sc_w9_fri_bench": 6, "note_w9_fri_bench": "22 kg x 10 sb incline row, 1 set every 4 min", "sc_w9_fri_seated_press": 3, "sc_w9_fri_chin_ups": 3, "note_w9_fri_cond": "20 double under followed by dips AMAP", "_n5cleared": true, "hidden_w7_mon_rev_lunge": true, "sc_w7_mon_squat": 6, "note_w7_mon_squat": "x3 pull-ups after each set", "note_w7_mon_cond": "300m run 21 body weight squats, 200m run, 16 squats, 100,m run 11 squats", "exname_w7_tue_strict_press": "Bench Press", "exname_w7_tue_chin_hold": "Seated slide strict press", "exname_w7_tue_pull_aparts": "Wide grip strict pull-ups", "exlabel_w7_tue_chin_hold": "B1", "exlabel_w7_tue_pull_aparts": "B2", "hidden_w7_tue_incline_db": true, "hidden_w7_tue_pull_up": true, "hidden_w7_tue_lat_raise": true, "hidden_w7_tue_ez_curl": true, "hidden_w7_tue_pushup": true, "sc_w7_tue_strict_press": 6, "note_w7_tue_strict_press": "every rep followed by 22 kg DB row", "sc_w7_tue_chin_hold": 3, "sc_w7_tue_pull_aparts": 3, "note_w7_tue_pull_aparts": "Bodyweight", "note_w7_tue_cond": "2 min work 2 min rest x 3", "note_w7_wed_rec": "Stretch, 45 min walk, abs and lower back", "exname_w7_thu_deadlift": "Trap bar Deadlift", "exname_w7_thu_split_sq": "Back rack rear elevated split squat", "exname_w7_thu_sldl": "Trap bar shrug", "hidden_w7_thu_ab_wheel": true, "hidden_w7_thu_db_row": true, "exname_w7_fri_bench": "Strict press", "exname_w7_fri_seated_press": "Incline DB bench press", "exname_w7_fri_chin_ups": "Barbell seal row", "hidden_w7_fri_dips": true, "hidden_w7_fri_hammer": true, "hidden_w7_fri_bent_raise": true, "exlabel_w7_fri_cond": "C", "exlabel_w7_thu_cond": "C", "sc_w7_thu_deadlift": 6, "note_w7_thu_deadlift": "1 set every 3-4 min. 8 kneeling ab wheel", "sc_w5_mon_squat": 6, "sc_w6_mon_squat": 6, "sc_w6_mon_pause_sq": 4, "hidden_w6_mon_rev_lunge": true, "note_w6_mon_cond": "5x5 incline x 30 sec on a bike", "hidden_w6_tue_chin_hold": true, "hidden_w6_tue_pull_aparts": true, "hidden_w6_tue_pull_up": true, "hidden_w6_tue_lat_raise": true, "hidden_w6_tue_ez_curl": true, "exname_w6_tue_pushup": "Barebell seal row", "sc_w6_tue_strict_press": 6, "note_w6_tue_strict_press": "4 pull-ups after every set, alternate every 2 min", "note_w6_tue_cond": "10 cal run, 10 dips, 10 toes to bar 5+ rounds in 7 min", "note_w6_wed_rec": "30-45 min walk or run, stretch", "exname_w6_thu_sldl": "Barebell shrug", "hidden_w6_thu_ab_wheel": true, "hidden_w6_thu_db_row": true, "sc_w6_thu_deadlift": 6, "sc_w6_thu_split_sq": 3, "sc_w6_thu_sldl": 3, "note_w6_thu_cond": "Same as on Tuesday", "exname_w6_fri_seated_press": "Seated sliding strict press with barebell", "exname_w6_fri_chin_ups": "Wide grip strict pull-up", "hidden_w6_fri_dips": true, "hidden_w6_fri_hammer": true, "hidden_w6_fri_bent_raise": true, "exname_w6_fri_cond": "Conditioning PUMP", "sc_w6_fri_bench": 6, "note_w6_fri_bench": "Every 4 min, 22kg single arm DB row after every set", "sc_w6_fri_seated_press": 3, "interval_w6_fri_seated_press": "1:45", "note_w6_fri_seated_press": "B1 & B2 after every 1:45", "sc_w6_fri_chin_ups": 3, "note_w6_fri_chin_ups": "Bodyweight", "note_w6_fri_cond": "4 rounds: 15 cal row, 12 dips, 12 KB 20 kg towel curl", "hidden_w5_mon_rev_lunge": true, "exname_w5_mon_pause_sq": "Front squat", "note_w5_mon_cond": "7 min row + 7 min sprint", "hidden_w5_tue_chin_hold": true, "hidden_w5_tue_pull_aparts": true, "exname_w5_tue_incline_db": "Low incline DB Bench Press", "hidden_w5_tue_lat_raise": true, "hidden_w5_tue_ez_curl": true, "hidden_w5_tue_pushup": true, "exlabel_w5_tue_cond": "C", "sc_w5_tue_strict_press": 6, "note_w5_tue_strict_press": "Pull-ups after every 1:45, 10-8-6-5-5-5", "note_w5_tue_pull_up": "3x6-9", "note_w5_tue_cond": "8-7-6-5-4-3-2-1, 12 kg DB squat, 25 double under", "note_w5_wed_rec": "30-45 min walk or run + stretching", "exname_w5_thu_split_sq": "DB reverse lunge", "exname_w5_thu_sldl": "Shurgs", "hidden_w5_thu_ab_wheel": true, "hidden_w5_thu_db_row": true, "sc_w5_thu_deadlift": 6, "sc_w5_thu_split_sq": 3, "sc_w5_thu_sldl": 3, "note_w5_thu_cond": "10x30sec bike sprint", "exlabel_w5_thu_cond": "C", "exname_w5_fri_seated_press": "Pike push-ups", "exname_w5_fri_chin_ups": "False grip ring pull-up", "hidden_w5_fri_dips": true, "hidden_w5_fri_hammer": true, "hidden_w5_fri_bent_raise": true, "exlabel_w5_fri_cond": "C", "sc_w5_fri_bench": 6, "note_w5_fri_bench": "22kg single arm DB row after each set of press", "sc_w5_fri_seated_press": 3, "sc_w5_fri_chin_ups": 3, "note_w5_fri_cond": "20 double down followed by dips AMAP", "w1_mon_squat_s0": {"kg": "50", "reps": "10", "done": "1"}, "w1_mon_squat_s1": {"kg": "50", "reps": "10", "done": "1"}, "w1_mon_squat_s2": {"kg": "50", "reps": "10", "done": "1"}, "w1_mon_pause_sq_s0": {"kg": "50", "reps": "6", "done": "1"}, "w1_mon_pause_sq_s1": {"kg": "50", "reps": "6", "done": "1"}, "w1_mon_pause_sq_s2": {"kg": "50", "reps": "6", "done": "1"}, "w1_mon_pause_sq_s3": {"kg": "50", "reps": "6", "done": "1"}, "w1_mon_rev_lunge_s0": {"kg": "", "reps": "10", "done": "1"}, "w1_mon_rev_lunge_s1": {"kg": "", "reps": "10", "done": "1"}, "w1_mon_rev_lunge_s2": {"kg": "", "reps": "10", "done": "1"}, "w1_tue_strict_press_s0": {"kg": "30", "reps": "10", "done": "1"}, "w1_tue_strict_press_s1": {"kg": "30", "reps": "10", "done": "1"}, "w1_tue_strict_press_s2": {"kg": "30", "reps": "10", "done": "1"}, "w1_tue_chin_hold_s0": {"kg": "", "reps": "15", "done": "1"}, "w1_tue_chin_hold_s1": {"kg": "", "reps": "15", "done": "1"}, "w1_tue_chin_hold_s2": {"kg": "", "reps": "15", "done": "1"}, "w1_tue_chin_hold_s3": {"kg": "", "reps": "15", "done": "1"}, "w1_tue_pull_aparts_s0": {"kg": "", "reps": "25", "done": "1"}, "w1_tue_pull_aparts_s1": {"kg": "", "reps": "25", "done": "1"}, "w1_tue_pull_aparts_s2": {"kg": "", "reps": "25", "done": "1"}, "w1_tue_pull_aparts_s3": {"kg": "", "reps": "25", "done": "1"}, "w1_tue_incline_db_s0": {"kg": "26", "reps": "10", "done": "1"}, "w1_tue_incline_db_s1": {"kg": "26", "reps": "10", "done": "1"}, "w1_tue_incline_db_s2": {"kg": "26", "reps": "10", "done": "1"}, "w1_tue_pull_up_s0": {"kg": "", "reps": "6", "done": "1"}, "w1_tue_pull_up_s1": {"kg": "", "reps": "6", "done": "1"}, "w1_tue_pull_up_s2": {"kg": "", "reps": "6", "done": "1"}, "w1_tue_lat_raise_s0": {"kg": "5", "reps": "15", "done": "1"}, "w1_tue_lat_raise_s1": {"kg": "5", "reps": "15", "done": "1"}, "w1_tue_lat_raise_s2": {"kg": "5", "reps": "15", "done": "1"}, "w1_tue_ez_curl_s0": {"kg": "20", "reps": "10", "done": "1"}, "w1_tue_ez_curl_s1": {"kg": "20", "reps": "10", "done": "1"}, "w1_tue_ez_curl_s2": {"kg": "20", "reps": "10", "done": "1"}, "w1_tue_pushup_s0": {"kg": "", "reps": "15", "done": "1"}, "w1_tue_pushup_s1": {"kg": "", "reps": "12", "done": "1"}, "w1_tue_pushup_s2": {"kg": "", "reps": "10", "done": "1"}, "w1_thu_deadlift_s0": {"kg": "90", "reps": "10", "done": "1"}, "w1_thu_deadlift_s1": {"kg": "90", "reps": "10", "done": "1"}, "w1_thu_deadlift_s2": {"kg": "90", "reps": "10", "done": "1"}, "w1_thu_split_sq_s0": {"kg": "5", "reps": "12", "done": "1"}, "w1_thu_split_sq_s1": {"kg": "5", "reps": "12", "done": "1"}, "w1_thu_sldl_s0": {"kg": "60", "reps": "10", "done": "1"}, "w1_thu_sldl_s1": {"kg": "60", "reps": "10", "done": "1"}, "w1_thu_ab_wheel_s0": {"kg": "", "reps": "8", "done": "1"}, "w1_thu_ab_wheel_s1": {"kg": "", "reps": "8", "done": "1"}, "w1_thu_ab_wheel_s2": {"kg": "", "reps": "8", "done": "1"}, "w1_thu_ab_wheel_s3": {"kg": "", "reps": "8", "done": "1"}, "w1_thu_db_row_s0": {"kg": "20", "reps": "10", "done": "1"}, "w1_thu_db_row_s1": {"kg": "20", "reps": "10", "done": "1"}, "w1_thu_db_row_s2": {"kg": "20", "reps": "10", "done": "1"}, "w1_thu_db_row_s3": {"kg": "20", "reps": "10", "done": "1"}, "w1_fri_bench_s0": {"kg": "55", "reps": "10", "done": "1"}, "w1_fri_bench_s1": {"kg": "55", "reps": "10", "done": "1"}, "w1_fri_bench_s2": {"kg": "55", "reps": "10", "done": "1"}, "w1_fri_seated_press_s0": {"kg": "22", "reps": "8", "done": "1"}, "w1_fri_seated_press_s1": {"kg": "22", "reps": "8", "done": "1"}, "w1_fri_chin_ups_s0": {"kg": "", "reps": "8", "done": "1"}, "w1_fri_chin_ups_s1": {"kg": "", "reps": "8", "done": "1"}, "w1_fri_dips_s0": {"kg": "", "reps": "12", "done": "1"}, "w1_fri_dips_s1": {"kg": "", "reps": "12", "done": "1"}, "w1_fri_hammer_s0": {"kg": "14", "reps": "11", "done": "1"}, "w1_fri_hammer_s1": {"kg": "14", "reps": "11", "done": "1"}, "w1_fri_bent_raise_s0": {"kg": "9", "reps": "10", "done": "1"}, "w1_fri_bent_raise_s1": {"kg": "9", "reps": "10", "done": "1"}, "w2_mon_squat_s0": {"kg": "60", "done": "1"}, "w2_mon_squat_s1": {"kg": "60", "done": "1"}, "w2_mon_squat_s2": {"kg": "60", "done": "1"}, "w2_mon_squat_s3": {"kg": "60", "done": "1"}, "w2_mon_pause_sq_s0": {"kg": "50", "done": "1", "reps": "5"}, "w2_mon_pause_sq_s1": {"kg": "50", "done": "1", "reps": "5"}, "w2_mon_pause_sq_s2": {"kg": "50", "done": "1", "reps": "5"}, "w2_mon_pause_sq_s3": {"kg": "50", "done": "1", "reps": "5"}, "w2_mon_pause_sq_s4": {"kg": "50", "reps": "5", "done": "1"}, "w2_mon_rev_lunge_s0": {"kg": "12", "reps": "20", "done": "1"}, "w2_mon_rev_lunge_s1": {"kg": "12", "reps": "20", "done": "1"}, "w2_tue_strict_press_s0": {"kg": "35", "reps": "8", "done": "1"}, "w2_tue_strict_press_s1": {"kg": "35", "reps": "8", "done": "1"}, "w2_tue_strict_press_s2": {"kg": "35", "reps": "8", "done": "1"}, "w2_tue_strict_press_s3": {"kg": "35", "reps": "8", "done": "1"}, "w2_tue_incline_db_s0": {"reps": "11", "kg": "26", "done": "1"}, "w2_tue_incline_db_s1": {"reps": "11", "kg": "26", "done": "1"}, "w2_tue_incline_db_s2": {"reps": "11", "kg": "20", "done": "1"}, "w2_tue_pull_up_s0": {"reps": "7", "done": "1"}, "w2_tue_pull_up_s1": {"reps": "7", "done": "1"}, "w2_tue_pull_up_s2": {"reps": "6", "done": "1"}, "w2_tue_lat_raise_s0": {"reps": "15", "kg": "6", "done": "1"}, "w2_tue_lat_raise_s1": {"reps": "15", "kg": "6", "done": "1"}, "w2_tue_ez_curl_s0": {"reps": "12", "kg": "30", "done": "1"}, "w2_tue_ez_curl_s1": {"reps": "12", "kg": "30", "done": "1"}, "w2_tue_pushup_s0": {"reps": "15", "done": "1"}, "w2_tue_pushup_s1": {"reps": "15", "done": "1"}, "w2_thu_deadlift_s0": {"kg": "95", "reps": "10", "done": "1"}, "w2_thu_deadlift_s1": {"kg": "95", "reps": "10", "done": "1"}, "w2_thu_deadlift_s2": {"kg": "95", "reps": "10", "done": "1"}, "w2_thu_split_sq_s0": {"kg": "12", "reps": "10", "done": "1"}, "w2_thu_split_sq_s1": {"kg": "12", "reps": "10", "done": "1"}, "w2_thu_split_sq_s2": {"kg": "12", "reps": "10", "done": "1"}, "w2_thu_sldl_s0": {"kg": "60", "reps": "10", "done": "1"}, "w2_thu_sldl_s1": {"kg": "60", "reps": "10", "done": "1"}, "w2_thu_sldl_s2": {"kg": "60", "reps": "10", "done": "1"}, "w2_thu_ab_wheel_s2": {"done": "1"}, "w2_thu_ab_wheel_s1": {"done": "1"}, "w2_thu_ab_wheel_s0": {"done": "1"}, "w2_thu_db_row_s0": {"kg": "22", "reps": "10", "done": "1"}, "w2_thu_db_row_s1": {"kg": "22", "reps": "10", "done": "1"}, "w2_thu_db_row_s2": {"kg": "22", "reps": "10", "done": "1"}, "w2_fri_bench_s0": {"kg": "60", "reps": "10", "done": "1"}, "w2_fri_bench_s1": {"kg": "60", "reps": "10", "done": "1"}, "w2_fri_bench_s2": {"kg": "60", "reps": "10", "done": "1"}, "w2_fri_bench_s3": {"kg": "60", "reps": "10", "done": "1"}, "w2_fri_seated_press_s0": {"reps": "12", "kg": "18", "done": "1"}, "w2_fri_seated_press_s1": {"reps": "12", "kg": "18", "done": "1"}, "w2_fri_chin_ups_s0": {"reps": "7", "done": "1"}, "w2_fri_chin_ups_s1": {"reps": "7", "done": "1"}, "w2_fri_dips_s0": {"reps": "12", "done": "1"}, "w2_fri_dips_s1": {"reps": "12", "done": "1"}, "w2_fri_bent_raise_s0": {"kg": "6", "reps": "-4", "done": "1"}, "w2_fri_bent_raise_s1": {"kg": "6", "reps": "25", "done": "1"}, "w2_fri_hammer_s0": {"done": "1"}, "w2_fri_hammer_s1": {"done": "1"}, "w3_mon_squat_s0": {"kg": "62.5", "reps": "10", "done": "1"}, "w3_mon_squat_s1": {"kg": "62.5", "reps": "10", "done": "1"}, "w3_mon_squat_s2": {"kg": "62.5", "reps": "10", "done": "1"}, "w3_mon_squat_s3": {"kg": "62.5", "reps": "10", "done": "1"}, "w3_mon_squat_s4": {"kg": "62.5", "reps": "10", "done": "1"}, "w3_mon_pause_sq_s0": {"kg": "50", "reps": "4", "done": "1"}, "w3_mon_pause_sq_s1": {"kg": "50", "reps": "4", "done": "1"}, "w3_mon_pause_sq_s2": {"kg": "50", "reps": "4", "done": "1"}, "w3_mon_pause_sq_s3": {"kg": "50", "reps": "4", "done": "1"}, "w3_mon_pause_sq_s4": {"kg": "50", "reps": "4", "done": "1"}, "w3_mon_pause_sq_s5": {"kg": "50", "reps": "4", "done": "1"}, "w3_mon_rev_lunge_s0": {"done": "1"}, "w3_mon_rev_lunge_s1": {"done": "1"}, "w3_tue_strict_press_s0": {"kg": "32.5", "reps": "6", "done": "1"}, "w3_tue_strict_press_s1": {"kg": "32.5", "reps": "6", "done": "1"}, "w3_tue_strict_press_s2": {"kg": "32.5", "reps": "6", "done": "1"}, "w3_tue_strict_press_s3": {"kg": "32.5", "reps": "6", "done": "1"}, "w3_tue_strict_press_s4": {"kg": "32.5", "reps": "6", "done": "1"}, "w3_tue_strict_press_s5": {"kg": "32.5", "reps": "6", "done": "1"}, "w3_tue_pull_aparts_s1": {"done": "1"}, "w3_tue_pull_aparts_s0": {"done": "1"}, "w3_tue_pull_aparts_s2": {"done": "1"}, "w3_tue_pull_aparts_s3": {"done": "1"}, "w3_tue_pull_aparts_s4": {"done": "1"}, "w3_tue_pull_aparts_s5": {"done": "1"}, "w3_tue_chin_hold_s0": {"done": "1"}, "w3_tue_chin_hold_s2": {"done": "1"}, "w3_tue_chin_hold_s1": {"done": "1"}, "w3_tue_chin_hold_s4": {"done": "1"}, "w3_tue_chin_hold_s5": {"done": "1"}, "w3_tue_chin_hold_s3": {"done": "1"}, "w3_tue_incline_db_s0": {"kg": "20", "reps": "12", "done": "1"}, "w3_tue_incline_db_s2": {"kg": "20", "reps": "12", "done": "1"}, "w3_tue_incline_db_s1": {"kg": "20", "reps": "12", "done": "1"}, "w3_tue_pull_up_s0": {"reps": "10", "done": "1"}, "w3_tue_pull_up_s1": {"reps": "8", "done": "1"}, "w3_tue_pull_up_s2": {"reps": "5", "done": "1"}, "w3_tue_lat_raise_s0": {"kg": "9", "reps": "5", "done": "1"}, "w3_tue_lat_raise_s1": {"kg": "6", "reps": "10", "done": "1"}, "w3_tue_lat_raise_s2": {"kg": "4", "reps": "15", "done": "1"}, "w3_tue_lat_raise_s3": {"kg": "4", "reps": "15", "done": "1"}, "w3_tue_lat_raise_s4": {"kg": "6", "reps": "10", "done": "1"}, "w3_tue_lat_raise_s5": {"kg": "9", "reps": "5", "done": "1"}, "w3_tue_ez_curl_s0": {"kg": "20", "reps": "15", "done": "1"}, "w3_tue_ez_curl_s1": {"kg": "20", "reps": "15", "done": "1"}, "w3_tue_pushup_s0": {"reps": "15", "done": "1"}, "w3_tue_pushup_s1": {"reps": "24", "done": "1"}, "w3_thu_deadlift_s0": {"kg": "100", "reps": "8", "done": "1"}, "w3_thu_deadlift_s1": {"kg": "100", "reps": "8", "done": "1"}, "w3_thu_deadlift_s2": {"kg": "100", "reps": "8", "done": "1"}, "w3_thu_deadlift_s3": {"kg": "100", "reps": "8", "done": "1"}, "w3_thu_split_sq_s0": {"reps": "10", "done": "1"}, "w3_thu_split_sq_s1": {"reps": "10", "done": "1"}, "w3_thu_split_sq_s2": {"reps": "10", "done": "1"}, "w3_thu_sldl_s0": {"kg": "62.5", "reps": "10"}, "w3_thu_sldl_s1": {"kg": "62.5", "reps": "10", "done": "1"}, "w3_thu_sldl_s2": {"kg": "62.5", "reps": "10", "done": "1"}, "w3_thu_ab_wheel_s0": {"reps": "10", "done": "1"}, "w3_thu_ab_wheel_s1": {"reps": "10", "done": "1"}, "w3_thu_ab_wheel_s2": {"reps": "10", "done": "1"}, "w3_thu_db_row_s0": {"kg": "22", "reps": "10", "done": "1"}, "w3_thu_db_row_s1": {"kg": "22", "reps": "10", "done": "1"}, "w3_thu_db_row_s2": {"kg": "22", "reps": "10", "done": "1"}, "w3_fri_bench_s0": {"reps": "8", "kg": "62.5", "done": "1"}, "w3_fri_bench_s1": {"reps": "8", "kg": "62.5", "done": "1"}, "w3_fri_bench_s2": {"reps": "8", "kg": "62.5", "done": "1"}, "w3_fri_bench_s3": {"reps": "8", "kg": "62.5", "done": "1"}, "w3_fri_bench_s4": {"reps": "8", "kg": "62.5", "done": "1"}, "w3_fri_seated_press_s0": {"reps": "10", "kg": "22", "done": "1"}, "w3_fri_seated_press_s1": {"kg": "22", "reps": "10", "done": "1"}, "w3_fri_seated_press_s2": {"kg": "22", "reps": "4", "done": "1"}, "w3_fri_chin_ups_s0": {"reps": "10", "done": "1"}, "w3_fri_chin_ups_s1": {"reps": "9", "done": "1"}, "w3_fri_chin_ups_s2": {"reps": "5", "done": "1"}, "w3_fri_dips_s0": {"reps": "10", "done": "1"}, "w3_fri_dips_s1": {"reps": "10", "done": "1"}, "w3_fri_dips_s2": {"reps": "10", "done": "1"}, "w3_fri_hammer_s0": {"kg": "14", "reps": "14"}, "w3_fri_hammer_s1": {"kg": "14", "reps": "10"}, "w3_fri_hammer_s2": {"kg": "14", "reps": "9"}, "w3_fri_bent_raise_s0": {"kg": "7", "reps": "25"}, "w3_fri_bent_raise_s1": {"kg": "7", "reps": "18"}, "w3_fri_bent_raise_s2": {"kg": "7", "reps": "15"}, "w4_mon_squat_s0": {"kg": "50", "reps": "5", "done": "1"}, "w4_mon_squat_s1": {"kg": "50", "reps": "5", "done": "1"}, "w4_mon_squat_s2": {"kg": "50", "reps": "5", "done": "1"}, "w4_mon_squat_s3": {"kg": "50", "reps": "5", "done": "1"}, "w4_mon_squat_s4": {"kg": "50", "reps": "5", "done": "1"}, "w4_mon_pause_sq_s0": {"kg": "150", "reps": "12", "done": "1"}, "w4_mon_pause_sq_s1": {"kg": "150", "reps": "12", "done": "1"}, "w4_mon_pause_sq_s2": {"kg": "150", "reps": "12", "done": "1"}, "w4_mon_rev_lunge_s0": {"kg": "10", "reps": "16", "done": "1"}, "w4_mon_rev_lunge_s1": {"kg": "10", "reps": "16", "done": "1"}, "w4_mon_rev_lunge_s2": {"kg": "10", "reps": "16", "done": "1"}, "w4_tue_strict_press_s0": {"kg": "22.5", "reps": "5", "done": "1"}, "w4_tue_strict_press_s1": {"kg": "22.5", "reps": "5", "done": "1"}, "w4_tue_strict_press_s2": {"kg": "22.5", "reps": "5", "done": "1"}, "w4_tue_strict_press_s3": {"kg": "22.5", "reps": "5", "done": "1"}, "w4_tue_strict_press_s4": {"kg": "22.5", "reps": "5", "done": "1"}, "w4_tue_chin_hold_s0": {"done": "1"}, "w4_tue_chin_hold_s1": {"done": "1"}, "w4_tue_chin_hold_s2": {"done": "1"}, "w4_tue_chin_hold_s3": {"done": "1"}, "w4_tue_chin_hold_s4": {"done": "1"}, "w4_tue_pull_aparts_s0": {"done": "1", "reps": "20"}, "w4_tue_pull_aparts_s1": {"done": "1", "reps": "20"}, "w4_tue_pull_aparts_s2": {"done": "1", "reps": "20"}, "w4_tue_pull_aparts_s3": {"done": "1", "reps": "20"}, "w4_tue_pull_aparts_s4": {"done": "1", "reps": "19"}, "w4_tue_incline_db_s0": {"reps": "12", "done": "1"}, "w4_tue_incline_db_s1": {"reps": "12", "done": "1"}, "w4_tue_incline_db_s2": {"reps": "12", "done": "1"}, "w4_tue_pull_up_s0": {"done": "1", "reps": "5"}, "w4_tue_pull_up_s1": {"done": "1", "reps": "5"}, "w4_tue_pull_up_s2": {"done": "1", "reps": "1"}, "w4_thu_deadlift_s0": {"reps": "10", "kg": "105", "done": "1"}, "w4_thu_deadlift_s1": {"reps": "8", "kg": "110", "done": "1"}, "w4_thu_deadlift_s2": {"reps": "6", "kg": "115", "done": "1"}, "w4_thu_deadlift_s3": {"reps": "10", "kg": "107.5", "done": "1"}, "w4_thu_deadlift_s4": {"reps": "8", "kg": "112.5", "done": "1"}, "w4_thu_deadlift_s5": {"reps": "6", "kg": "117.5", "done": "1"}, "w4_thu_split_sq_s0": {"kg": "16", "reps": "16", "done": "1"}, "w4_thu_split_sq_s1": {"kg": "16", "reps": "16", "done": "1"}, "w4_thu_split_sq_s2": {"kg": "16", "reps": "16", "done": "1"}, "w4_thu_sldl_s0": {"kg": "70", "reps": "12", "done": "1"}, "w4_thu_sldl_s1": {"kg": "70", "reps": "12", "done": "1"}, "w4_thu_sldl_s2": {"kg": "70", "reps": "12", "done": ""}, "w4_fri_bench_s0": {"reps": "10", "done": "1", "kg": "62.5"}, "w4_fri_bench_s1": {"reps": "8", "done": "1", "kg": "65"}, "w4_fri_bench_s2": {"reps": "6", "done": "1", "kg": "67.5"}, "w4_fri_bench_s3": {"reps": "10", "done": "1", "kg": "65"}, "w4_fri_bench_s4": {"reps": "8", "done": "1", "kg": "67.5"}, "w4_fri_bench_s5": {"reps": "6", "done": "1", "kg": "65"}, "w4_fri_seated_press_s0": {"reps": "6", "done": "1"}, "w4_fri_seated_press_s1": {"reps": "6", "done": "1"}, "w4_fri_seated_press_s2": {"reps": "6", "done": "1"}, "w4_fri_chin_ups_s0": {"reps": "4", "done": "1"}, "w4_fri_chin_ups_s1": {"reps": "4", "done": "1"}, "w4_fri_chin_ups_s2": {"reps": "4", "done": "1"}, "w9_mon_squat_s0": {"reps": "10", "kg": "65", "done": ""}, "w9_mon_squat_s1": {"reps": "8", "kg": "67.5", "done": ""}, "w9_mon_squat_s2": {"reps": "8", "kg": "70", "done": ""}, "w9_mon_squat_s3": {"reps": "10", "kg": "67.5", "done": ""}, "w9_mon_squat_s4": {"reps": "8", "kg": "70", "done": ""}, "w9_mon_squat_s5": {"reps": "6", "kg": "72.5", "done": ""}, "w9_mon_pause_sq_s0": {"kg": "57.5", "reps": "5", "done": ""}, "w9_mon_pause_sq_s1": {"kg": "57.5", "reps": "5", "done": ""}, "w9_mon_pause_sq_s2": {"kg": "57.5", "reps": "5", "done": ""}, "w9_mon_rev_lunge_s0": {"done": ""}, "w9_tue_strict_press_s0": {"reps": "10", "kg": "35", "done": ""}, "w9_tue_strict_press_s1": {"reps": "8", "kg": "37.5", "done": ""}, "w9_tue_strict_press_s2": {"reps": "6", "kg": "40", "done": ""}, "w9_tue_strict_press_s3": {"reps": "10", "kg": "37.5", "done": ""}, "w9_tue_strict_press_s4": {"reps": "8", "kg": "40", "done": ""}, "w9_tue_strict_press_s5": {"reps": "6", "kg": "42.5", "done": ""}, "w9_tue_incline_db_s0": {"kg": "24", "reps": "12", "done": ""}, "w9_tue_incline_db_s1": {"kg": "22", "reps": "9", "done": ""}, "w9_tue_incline_db_s2": {"kg": "20", "reps": "8", "done": ""}, "w9_tue_pull_up_s0": {"reps": "6", "done": ""}, "w9_tue_pull_up_s1": {"reps": "6", "done": ""}, "w9_tue_pull_up_s2": {"reps": "6", "done": ""}, "w9_thu_deadlift_s0": {"reps": "10", "kg": "105", "done": ""}, "w9_thu_deadlift_s1": {"reps": "8", "kg": "110", "done": ""}, "w9_thu_deadlift_s2": {"reps": "6", "kg": "115", "done": ""}, "w9_thu_deadlift_s3": {"reps": "10", "kg": "110", "done": ""}, "w9_thu_deadlift_s4": {"reps": "8", "kg": "115", "done": ""}, "w9_thu_deadlift_s5": {"reps": "6", "kg": "120", "done": ""}, "w9_thu_ab_wheel_s0": {"reps": "16", "kg": "16", "done": ""}, "w9_thu_ab_wheel_s1": {"reps": "16", "kg": "16", "done": ""}, "w9_thu_ab_wheel_s2": {"reps": "16", "kg": "1", "done": ""}, "w9_thu_db_row_s0": {"kg": "70", "reps": "12", "done": ""}, "w9_thu_db_row_s1": {"kg": "70", "reps": "12", "done": ""}, "w9_thu_db_row_s2": {"kg": "70", "reps": "12", "done": ""}, "w9_fri_bench_s0": {"reps": "10", "kg": "62.5", "done": ""}, "w9_fri_bench_s1": {"reps": "8", "kg": "65", "done": ""}, "w9_fri_bench_s2": {"reps": "6", "kg": "67.5", "done": ""}, "w9_fri_bench_s3": {"reps": "10", "kg": "65", "done": ""}, "w9_fri_bench_s4": {"reps": "8", "kg": "67.5", "done": ""}, "w9_fri_bench_s5": {"reps": "6", "kg": "70", "done": ""}, "w9_fri_seated_press_s0": {"reps": "6", "done": ""}, "w9_fri_seated_press_s1": {"reps": "6", "done": ""}, "w9_fri_seated_press_s2": {"reps": "6", "done": ""}, "w9_fri_chin_ups_s0": {"reps": "4", "done": ""}, "w9_fri_chin_ups_s1": {"reps": "4", "done": ""}, "w9_fri_chin_ups_s2": {"reps": "4", "done": ""}, "w7_mon_squat_s0": {"kg": "72.5", "done": "1", "reps": "6"}, "w7_mon_squat_s1": {"kg": "75", "done": "1", "reps": "4"}, "w7_mon_squat_s2": {"kg": "77.5", "done": "1", "reps": "2"}, "w7_mon_squat_s3": {"kg": "75", "done": "1", "reps": "6"}, "w7_mon_squat_s4": {"kg": "77.5", "reps": "4", "done": "1"}, "w7_mon_squat_s5": {"kg": "80", "reps": "2", "done": "1"}, "w7_mon_pause_sq_s0": {"kg": "72.5", "reps": "2", "done": "1"}, "w7_mon_pause_sq_s1": {"kg": "72.5", "reps": "2", "done": "1"}, "w7_mon_pause_sq_s2": {"kg": "72.5", "reps": "2", "done": "1"}, "w7_tue_strict_press_s0": {"kg": "67.5", "reps": "6", "done": "1"}, "w7_tue_strict_press_s1": {"kg": "70", "reps": "4", "done": "1"}, "w7_tue_strict_press_s2": {"kg": "75", "reps": "2", "done": "1"}, "w7_tue_strict_press_s3": {"kg": "70", "reps": "6", "done": "1"}, "w7_tue_strict_press_s4": {"kg": "72.5", "reps": "4", "done": "1"}, "w7_tue_strict_press_s5": {"kg": "77.5", "reps": "2", "done": "1"}, "w7_tue_chin_hold_s0": {"kg": "35", "reps": "6", "done": "1"}, "w7_tue_chin_hold_s1": {"kg": "35", "reps": "6", "done": "1"}, "w7_tue_chin_hold_s2": {"kg": "35", "reps": "6", "done": "1"}, "w7_tue_pull_aparts_s0": {"reps": "8", "done": "1"}, "w7_tue_pull_aparts_s1": {"reps": "8", "done": "1"}, "w7_tue_pull_aparts_s2": {"reps": "8", "done": "1"}, "w7_thu_deadlift_s0": {"reps": "6", "kg": ""}, "w7_thu_deadlift_s1": {"reps": "4"}, "w7_thu_deadlift_s2": {"reps": "2"}, "w7_thu_deadlift_s3": {"reps": "6"}, "w7_thu_deadlift_s4": {"reps": "4"}, "w7_thu_deadlift_s5": {"reps": "2"}, "w5_mon_squat_s0": {"reps": "10", "done": "1", "kg": "65"}, "w5_mon_squat_s1": {"reps": "8", "done": "1", "kg": "67.5"}, "w5_mon_squat_s2": {"reps": "6", "done": "1", "kg": "70"}, "w5_mon_squat_s3": {"reps": "10", "done": "1", "kg": "67.5"}, "w5_mon_squat_s4": {"reps": "8", "done": "1", "kg": "70"}, "w5_mon_squat_s5": {"reps": "6", "done": "1", "kg": "72.5"}, "w6_mon_squat_s0": {"reps": "8", "kg": "67.5", "done": "1"}, "w6_mon_squat_s1": {"reps": "6", "kg": "70", "done": "1"}, "w6_mon_squat_s2": {"reps": "4", "kg": "72.5", "done": "1"}, "w6_mon_squat_s3": {"reps": "8", "kg": "70", "done": "1"}, "w6_mon_squat_s4": {"reps": "6", "kg": "72.5", "done": "1"}, "w6_mon_squat_s5": {"reps": "4", "kg": "75", "done": "1"}, "w6_mon_pause_sq_s0": {"kg": "67.5", "reps": "4", "done": "1"}, "w6_mon_pause_sq_s1": {"kg": "67.5", "reps": "4", "done": "1"}, "w6_mon_pause_sq_s2": {"kg": "67.5", "reps": "4", "done": "1"}, "w6_mon_pause_sq_s3": {"kg": "67.5", "reps": "4", "done": "1"}, "w6_tue_strict_press_s0": {"kg": "37.5", "reps": "8", "done": "1"}, "w6_tue_strict_press_s1": {"kg": "40", "reps": "6", "done": "1"}, "w6_tue_strict_press_s2": {"kg": "41.25", "reps": "4", "done": "1"}, "w6_tue_strict_press_s3": {"kg": "40", "reps": "8", "done": "1"}, "w6_tue_strict_press_s4": {"kg": "42.5", "reps": "6", "done": "1"}, "w6_tue_strict_press_s5": {"kg": "45", "reps": "4", "done": "1"}, "w6_tue_incline_db_s0": {"kg": "22", "reps": "10", "done": "1"}, "w6_tue_incline_db_s1": {"kg": "22", "reps": "10", "done": "1"}, "w6_tue_incline_db_s2": {"kg": "22", "reps": "10", "done": "1"}, "w6_tue_pushup_s0": {"kg": "22", "reps": "10", "done": "1"}, "w6_tue_pushup_s1": {"kg": "22", "reps": "10", "done": "1"}, "w6_tue_pushup_s2": {"kg": "22", "reps": "10", "done": "1"}, "w6_thu_deadlift_s0": {"reps": "8", "kg": "117.5", "done": "1"}, "w6_thu_deadlift_s1": {"reps": "6", "kg": "122.5", "done": "1"}, "w6_thu_deadlift_s2": {"reps": "4", "kg": "127.5", "done": "1"}, "w6_thu_deadlift_s3": {"reps": "8", "kg": "122.5", "done": "1"}, "w6_thu_deadlift_s4": {"reps": "6", "kg": "125", "done": "1"}, "w6_thu_deadlift_s5": {"reps": "4", "kg": "130", "done": "1"}, "w6_thu_split_sq_s0": {"kg": "20", "reps": "10", "done": "1"}, "w6_thu_split_sq_s1": {"kg": "20", "reps": "10", "done": "1"}, "w6_thu_split_sq_s2": {"kg": "20", "reps": "10", "done": "1"}, "w6_thu_sldl_s0": {"kg": "100", "reps": "10", "done": "1"}, "w6_thu_sldl_s1": {"kg": "100", "reps": "10", "done": "1"}, "w6_thu_sldl_s2": {"kg": "100", "reps": "10", "done": "1"}, "w6_fri_bench_s0": {"reps": "8", "kg": "65", "done": "1"}, "w6_fri_bench_s1": {"reps": "6", "kg": "67.5", "done": "1"}, "w6_fri_bench_s2": {"reps": "4", "kg": "70", "done": "1"}, "w6_fri_bench_s3": {"reps": "8", "kg": "67.5", "done": "1"}, "w6_fri_bench_s4": {"reps": "6", "kg": "70", "done": "1"}, "w6_fri_bench_s5": {"reps": "4", "kg": "72.5", "done": "1"}, "w6_fri_seated_press_s0": {"kg": "30", "reps": "10", "done": "1"}, "w6_fri_seated_press_s1": {"kg": "30", "reps": "10", "done": "1"}, "w6_fri_seated_press_s2": {"kg": "30", "reps": "10", "done": "1"}, "w6_fri_chin_ups_s0": {"reps": "8", "done": "1"}, "w6_fri_chin_ups_s1": {"reps": "5", "done": "1"}, "w6_fri_chin_ups_s2": {"reps": "3", "done": "1"}, "w5_mon_pause_sq_s0": {"reps": "5", "kg": "57.5", "done": "1"}, "w5_mon_pause_sq_s1": {"reps": "5", "kg": "57.5", "done": "1"}, "w5_mon_pause_sq_s2": {"reps": "5", "kg": "57.5", "done": "1"}, "w5_tue_strict_press_s0": {"reps": "10", "kg": "35", "done": "1"}, "w5_tue_strict_press_s1": {"reps": "8", "kg": "37.5", "done": "1"}, "w5_tue_strict_press_s2": {"reps": "6", "kg": "40", "done": "1"}, "w5_tue_strict_press_s3": {"reps": "10", "kg": "37.5", "done": "1"}, "w5_tue_strict_press_s4": {"reps": "8", "kg": "40", "done": "1"}, "w5_tue_strict_press_s5": {"reps": "6", "kg": "42.5", "done": "1"}, "w5_tue_incline_db_s0": {"kg": "24", "reps": "12", "done": "1"}, "w5_tue_incline_db_s1": {"kg": "22", "reps": "9", "done": "1"}, "w5_tue_incline_db_s2": {"kg": "20", "reps": "8", "done": "1"}, "w5_tue_pull_up_s0": {"reps": "6", "done": "1"}, "w5_tue_pull_up_s1": {"reps": "4", "done": "1"}, "w5_tue_pull_up_s2": {"reps": "4", "done": "1"}, "w5_thu_deadlift_s0": {"reps": "10", "kg": "105", "done": "1"}, "w5_thu_deadlift_s1": {"reps": "8", "kg": "110", "done": "1"}, "w5_thu_deadlift_s2": {"reps": "6", "kg": "115", "done": "1"}, "w5_thu_deadlift_s3": {"reps": "10", "kg": "107.5", "done": "1"}, "w5_thu_deadlift_s4": {"reps": "8", "kg": "112.5", "done": "1"}, "w5_thu_deadlift_s5": {"reps": "6", "kg": "117.5", "done": "1"}, "w5_thu_split_sq_s0": {"kg": "16", "reps": "16", "done": "1"}, "w5_thu_split_sq_s1": {"kg": "16", "reps": "16", "done": "1"}, "w5_thu_split_sq_s2": {"kg": "16", "reps": "16", "done": "1"}, "w5_thu_sldl_s0": {"kg": "70", "reps": "12", "done": "1"}, "w5_thu_sldl_s1": {"kg": "70", "reps": "12", "done": "1"}, "w5_thu_sldl_s2": {"kg": "70", "reps": "12", "done": "1"}, "w5_fri_bench_s0": {"reps": "10", "done": "1", "kg": "62.5"}, "w5_fri_bench_s1": {"reps": "8", "done": "1", "kg": "65"}, "w5_fri_bench_s2": {"reps": "6", "done": "1", "kg": "67.5"}, "w5_fri_bench_s3": {"reps": "10", "done": "1", "kg": "65"}, "w5_fri_bench_s4": {"reps": "8", "done": "1", "kg": "67.5"}, "w5_fri_bench_s5": {"reps": "5", "done": "1", "kg": "70"}, "w5_fri_seated_press_s0": {"reps": "6", "done": "1"}, "w5_fri_seated_press_s1": {"reps": "6", "done": "1"}, "w5_fri_seated_press_s2": {"reps": "6", "done": "1"}, "w5_fri_chin_ups_s0": {"reps": "4", "done": "1"}, "w5_fri_chin_ups_s1": {"reps": "4", "done": "1"}, "w5_fri_chin_ups_s2": {"reps": "4", "done": "1"}, "mmOpen": true, "exname_w1_mon_pause_sq": "Pause Back Squat", "exname_w1_mon_rev_lunge": "DB Reverse Lunge", "exname_w2_mon_rev_lunge": "DB Reverse Lunge"};
const STORAGE_KEY = "timo_training_v81_real";
const PROGRAM_START = new Date("2026-02-02T00:00:00");
const TODAY = new Date(); TODAY.setHours(0,0,0,0);
const DAY_ORDER = ["mon","tue","wed","thu","fri","sat","sun"];
const DAY_LABEL = {"mon":"Monday","tue":"Tuesday","wed":"Wednesday","thu":"Thursday","fri":"Friday","sat":"Saturday","sun":"Sunday"};
const CANONICAL_NAME_MAP = {"squat": "Back Squat", "pause_sq": "Pause Back Squat", "rev_lunge": "DB Reverse Lunge", "strict_press": "Strict Press", "chin_hold": "Chin-Over-Bar Hold", "pull_aparts": "Band Pull-Aparts", "incline_db": "Incline DB Bench Press", "pull_up": "Pull-Up", "lat_raise": "DB Lateral Raise", "ez_curl": "EZ Bar Curl", "pushup": "Push-Up", "deadlift": "Deadlift", "split_sq": "Rear-Foot Elevated Split Squat", "sldl": "Stiff-Leg Deadlift", "ab_wheel": "Ab Wheel Rollout", "db_row": "Single-Arm DB Row", "bench": "Bench Press", "seated_press": "Seated DB Shoulder Press", "chin_ups": "Chin-Up", "dips": "Dips", "hammer": "DB Hammer Curl", "bent_raise": "Bent-Over Rear Delt Raise", "cond": "Conditioning", "rec": "Active Recovery"};

const EXERCISE_LIBRARY = [
  { name:"Ab Wheel Rollout", type:"weighted" },
  { name:"Active Recovery", type:"recovery" },
  { name:"Back Extension", type:"weighted" },
  { name:"Back Squat", type:"weighted", aliases:["squat","back squat","sq"] },
  { name:"Band Pull-Aparts", type:"bodyweight" },
  { name:"Barbell Row", type:"weighted", aliases:["bb row","barbell row"] },
  { name:"Barbell Seal Row", type:"weighted", aliases:["seal row"] },
  { name:"Barbell Shrug", type:"weighted", aliases:["barbell shrug","shrug"] },
  { name:"Bench Press", type:"weighted", aliases:["bench","bp","bench press"] },
  { name:"Bent-Over Rear Delt Raise", type:"weighted" },
  { name:"Bike", type:"conditioning" },
  { name:"Bulgarian Split Squat", type:"weighted" },
  { name:"Chest Supported Row", type:"weighted" },
  { name:"Chin-Over-Bar Hold", type:"bodyweight" },
  { name:"Chin-Up", type:"weighted", aliases:["chinup","chin-up"] },
  { name:"Conditioning", type:"conditioning", aliases:["cardio","conditioning"] },
  { name:"DB Hammer Curl", type:"weighted", aliases:["hammer curl"] },
  { name:"DB Lateral Raise", type:"weighted", aliases:["lateral raise"] },
  { name:"DB Reverse Lunge", type:"weighted", aliases:["reverse lunge"] },
  { name:"Deadlift", type:"weighted", aliases:["dead","deadlift","dl"] },
  { name:"Dip", type:"weighted", aliases:["dip","dips"] },
  { name:"EZ Bar Curl", type:"weighted" },
  { name:"False Grip Ring Pull-Up", type:"weighted" },
  { name:"Flat DB Bench Press", type:"weighted" },
  { name:"Front Squat", type:"weighted", aliases:["front squat"] },
  { name:"Goblet Squat", type:"weighted" },
  { name:"Hip Thrust", type:"weighted" },
  { name:"Incline DB Bench Press", type:"weighted" },
  { name:"KB Towel Curl", type:"weighted" },
  { name:"Lat Pulldown", type:"weighted" },
  { name:"Leg Press", type:"weighted" },
  { name:"Low Incline DB Bench Press", type:"weighted" },
  { name:"Metcon", type:"conditioning", aliases:["metcon"] },
  { name:"Pause Back Squat", type:"weighted", aliases:["pause squat"] },
  { name:"Pike Push-Up", type:"weighted" },
  { name:"Pull-Up", type:"weighted", aliases:["pullup","pull-up"] },
  { name:"Push-Up", type:"weighted", aliases:["pushup","push-up"] },
  { name:"Rear-Foot Elevated Split Squat", type:"weighted" },
  { name:"Romanian Deadlift", type:"weighted", aliases:["rdl","romanian deadlift"] },
  { name:"Row", type:"conditioning" },
  { name:"Run", type:"conditioning" },
  { name:"Seated Cable Row", type:"weighted" },
  { name:"Seated DB Hammer Curls", type:"weighted" },
  { name:"Seated DB Shoulder Press", type:"weighted" },
  { name:"Single-Arm DB Row", type:"weighted", aliases:["row","db row"] },
  { name:"Ski Erg", type:"conditioning" },
  { name:"Sprint", type:"conditioning" },
  { name:"Stiff-Leg Deadlift", type:"weighted" },
  { name:"Stretching", type:"recovery" },
  { name:"Strict Press", type:"weighted", aliases:["ohp","press","strict press"] },
  { name:"Thruster", type:"weighted" },
  { name:"Toes to Bar", type:"bodyweight" },
  { name:"Trap Bar Deadlift", type:"weighted" },
  { name:"Trap Bar Shrug", type:"weighted" },
  { name:"Treadmill Walk", type:"conditioning" },
  { name:"Walk", type:"conditioning" },
  { name:"Walking Lunges", type:"weighted" },
  { name:"Wide Grip Strict Pull-Up", type:"weighted" }
];

const EXERCISE_SUGGESTIONS = EXERCISE_LIBRARY.map(x => x.name).sort((a,b)=>a.localeCompare(b));
const EXERCISE_ALIASES = Object.fromEntries(
  EXERCISE_LIBRARY.flatMap(x => (x.aliases || []).map(alias => [alias.toLowerCase(), x.name]))
);
const NAME_TO_ID = {
  "Ab Wheel Rollout":"ab_wheel",
  "Active Recovery":"rec",
  "Back Squat":"squat",
  "Band Pull-Aparts":"pull_aparts",
  "Barbell Row":"barbell_row",
  "Barbell Seal Row":"barbell_seal_row",
  "Barbell Shrug":"barbell_shrug",
  "Bench Press":"bench",
  "Bent-Over Rear Delt Raise":"bent_raise",
  "Chin-Over-Bar Hold":"chin_hold",
  "Chin-Up":"chin_ups",
  "Conditioning":"cond",
  "DB Hammer Curl":"hammer",
  "DB Lateral Raise":"lat_raise",
  "DB Reverse Lunge":"rev_lunge",
  "Deadlift":"deadlift",
  "Dip":"dips",
  "EZ Bar Curl":"ez_curl",
  "False Grip Ring Pull-Up":"false_grip_ring_pull_up",
  "Front Squat":"front_squat",
  "Incline DB Bench Press":"incline_db",
  "KB Towel Curl":"kb_towel_curl",
  "Leg Press":"leg_press",
  "Low Incline DB Bench Press":"low_incline_db_bench_press",
  "Metcon":"metcon",
  "Pause Back Squat":"pause_sq",
  "Pike Push-Up":"pike_push_up",
  "Pull-Up":"pull_up",
  "Push-Up":"pushup",
  "Rear-Foot Elevated Split Squat":"split_sq",
  "Romanian Deadlift":"romanian_deadlift",
  "Row":"row",
  "Run":"run",
  "Seated Cable Row":"seated_cable_row",
  "Seated DB Hammer Curls":"seated_db_hammer_curls",
  "Seated DB Shoulder Press":"seated_press",
  "Single-Arm DB Row":"db_row",
  "Ski Erg":"ski_erg",
  "Sprint":"sprint",
  "Stiff-Leg Deadlift":"sldl",
  "Stretching":"stretching",
  "Strict Press":"strict_press",
  "Thruster":"thruster",
  "Toes to Bar":"toes_to_bar",
  "Trap Bar Deadlift":"trap_bar_deadlift",
  "Trap Bar Shrug":"trap_bar_shrug",
  "Treadmill Walk":"treadmill_walk",
  "Walk":"walk",
  "Walking Lunges":"walking_lunges",
  "Wide Grip Strict Pull-Up":"wide_grip_strict_pull_up"
};
const EXERCISE_TYPE_MAP = Object.fromEntries(EXERCISE_LIBRARY.map(x => [x.name.toLowerCase(), x.type]));
const WEIGHTED_NAME_HINTS = ["barbell","db ","dumbbell","bench","squat","deadlift","press","row","curl","shrug","lunge","pulldown","leg press","thruster","dip","pull-up","chin-up","push-up"];
const CONDITIONING_NAME_HINTS = ["conditioning","metcon","run","walk","bike","rower","ski erg","ski-erg","sprint","recovery","stretch"];
function getExerciseConfig(name){
  const normalized = normalizeExerciseDisplayName(name).toLowerCase();
  const directType = EXERCISE_TYPE_MAP[normalized];
  if(directType==="weighted") return { weight:true, reps:true, category:"weighted" };
  if(directType==="bodyweight") return { weight:true, reps:true, category:"bodyweight_weightable" };
  if(directType==="conditioning") return { weight:false, reps:false, category:"conditioning" };
  if(directType==="recovery") return { weight:false, reps:false, category:"recovery" };
  if(WEIGHTED_NAME_HINTS.some(h => normalized.includes(h))) return { weight:true, reps:true, category:"weighted" };
  if(CONDITIONING_NAME_HINTS.some(h => normalized.includes(h))) return { weight:false, reps:false, category:"conditioning" };
  return { weight:true, reps:true, category:"weighted" };
}
const MUSCLE_HINTS = {
  chest:["bench","incline","push-up","dip","pike"],
  back:["row","pull-up","chin","seal row","shrug","pull-aparts","pulldown"],
  shoulders:["strict press","lateral raise","rear delt","pike","seated db shoulder"],
  arms:["curl","hammer","dip"],
  quads:["squat","front squat","leg press","lunge","split squat","thruster"],
  posterior:["deadlift","stiff-leg","trap bar","shrug","back extension","hip thrust","romanian"],
  core:["ab wheel","roll out","toes to bar"],
  conditioning:["conditioning","metcon","run","bike","row","walk","sprint","ski"]
};


// ===== UTILITIES =====
function structured(x) { return JSON.parse(JSON.stringify(x)); }
function num(v) { const s=String(v??"").replace(",",".").trim(); return s?parseFloat(s):NaN; }
function esc(v) { return String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;"); }
function fmtShortDate(d) { return d.toLocaleDateString("en-GB", {day:"2-digit",month:"short"}); }
function fmtFullDate(d) { return d.toLocaleDateString("en-GB", {weekday:"short",day:"2-digit",month:"long",year:"numeric"}); }
function addDays(d,n) { const c=new Date(d); c.setDate(c.getDate()+n); return c; }
function weekStartDate(week) { return addDays(PROGRAM_START, (week-1)*7); }
function dayDate(week, day) { return addDays(weekStartDate(week), DAY_ORDER.indexOf(day)); }
function weekRangeLabel(week) { const s=weekStartDate(week), e=addDays(s,6); return `${fmtShortDate(s)} – ${fmtShortDate(e)}`; }

// ===== STATE =====
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if(!saved) return structured(SEED_DATA);
  try { return JSON.parse(saved); } catch { return structured(SEED_DATA); }
}
let state = loadState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  safeSetText("saveStatus", "Saved locally on this device.");
  scheduleCloudSave();
  renderApp();
}
function saveStateQuiet(message="Saved locally on this device.") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  safeSetText("saveStatus", message);
  scheduleCloudSave();
}
function showToast(message="Saved") {
  const el = ensureElement("quickToast");
  if(!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("show"), 1200);
}
function updateSetVolumeForInput(input) {
  const row = input.closest(".setrow");
  if(!row) return;
  const kgInput = row.querySelector("[data-role='kg']");
  const repsInput = row.querySelector("[data-role='reps']");
  const volumeInput = row.querySelector("[data-role='volume']");
  if(!kgInput || !repsInput || !volumeInput) return;
  const kg = num(kgInput.value);
  const reps = num(repsInput.value);
  if(!Number.isNaN(kg) && !Number.isNaN(reps)) volumeInput.value = Math.round(kg * reps);
  else if(!Number.isNaN(reps)) volumeInput.value = Math.round(reps);
  else volumeInput.value = "";
}
function commitTextFieldWithoutRender(message="Saved locally on this device.") {
  saveStateQuiet(message);
  showToast("Saved");
}
function getWeeks() {
  const weeks = new Set();
  Object.keys(state).forEach(k => {
    const m1 = k.match(/(?:^|_w)(\d+)_/);
    const m2 = k.match(/^w(\d+)_/);
    if(m1) weeks.add(Number(m1[1]));
    if(m2) weeks.add(Number(m2[1]));
  });
  if(!weeks.size) weeks.add(1);
  return [...weeks].filter(Boolean).sort((a,b)=>a-b);
}
function getInitialWeek() { const w=getWeeks(); return w.length ? w[w.length-1] : 1; }
function mapDateToProgramSlot(date) {
  const d = new Date(date); d.setHours(0,0,0,0);
  const start = new Date(PROGRAM_START); start.setHours(0,0,0,0);
  const diff = Math.round((d - start) / 86400000);
  if(diff < 0) return null;
  const week = Math.floor(diff / 7) + 1;
  const day = DAY_ORDER[diff % 7];
  return { week, day };
}
function normalizeExerciseDisplayName(name) {
  const raw = String(name||"").trim();
  if(!raw) return "New Exercise";
  const q = raw.toLowerCase();
  if(EXERCISE_ALIASES[q]) return EXERCISE_ALIASES[q];
  const direct = EXERCISE_SUGGESTIONS.find(x => x.toLowerCase()===q);
  if(direct) return direct;
  const fuzzy = getExerciseSuggestions(raw)[0];
  if(fuzzy) return fuzzy;
  return raw.replace(/\b\w/g, c => c.toUpperCase());
}
function normalizeExerciseKey(name) { return normalizeExerciseDisplayName(name).toLowerCase(); }
function getExerciseSuggestions(input) {
  const q = String(input||"").toLowerCase().trim();
  if(!q) return EXERCISE_SUGGESTIONS.slice(0,18);
  if(EXERCISE_ALIASES[q]) {
    const main = EXERCISE_ALIASES[q];
    return [main, ...EXERCISE_SUGGESTIONS.filter(x => x !== main)].slice(0,12);
  }
  const terms = q.split(/\s+/).filter(Boolean);
  return EXERCISE_SUGGESTIONS.map(name => {
    const lower=name.toLowerCase();
    let score=0;
    if(lower===q) score=100;
    else if(lower.startsWith(q)) score=80;
    else if(lower.includes(q)) score=60;
    else if(terms.length && terms.every(t => lower.includes(t))) score=40;
    return {name,score};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score || a.name.localeCompare(b.name)).map(x=>x.name).slice(0,12);
}
function suggestedExerciseId(name) {
  const n = normalizeExerciseDisplayName(name);
  return NAME_TO_ID[n] || n.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");
}
function exerciseName(week,day,ex) {
  let n = state[`exname_w${week}_${day}_${ex}`] || CANONICAL_NAME_MAP[ex] || ex.replaceAll("_"," ");
  n = String(n).trim();
  if(/^rec$/i.test(n)) n="Active Recovery";
  if(/^cond$/i.test(n)) n="Conditioning";
  return n;
}
function noteOf(week,day,ex) { return state[`note_w${week}_${day}_${ex}`] || ""; }
function restOf(week,day,ex) { return state[`rest_w${week}_${day}_${ex}`] || state[`interval_w${week}_${day}_${ex}`] || ""; }
function hiddenOf(week,day,ex) { return !!state[`hidden_w${week}_${day}_${ex}`]; }
function codeOf(week,day,ex) { return String(state[`excode_w${week}_${day}_${ex}`] || state[`exss_w${week}_${day}_${ex}`] || state[`exlabel_w${week}_${day}_${ex}`] || "").toUpperCase().trim(); }
function blockDoneOf(week,day,ex) { return state[`blockdone_w${week}_${day}_${ex}`] === "1"; }
function setCountOf(week,day,ex) {
  const sc = state[`sc_w${week}_${day}_${ex}`];
  if(sc != null) return Math.max(1, Number(sc));
  const keys = Object.keys(state).filter(k => new RegExp(`^w${week}_${day}_${ex}_s\d+$`).test(k));
  if(!keys.length) return 1;
  return Math.max(...keys.map(k => Number(k.match(/_s(\d+)$/)[1]))) + 1;
}
function getSet(week,day,ex,i) {
  const key = `w${week}_${day}_${ex}_s${i}`;
  if(!state[key]) state[key] = {kg:"", reps:"", done:""};
  return state[key];
}
function setVolume(s) {
  const kg=num(s.kg), reps=num(s.reps);
  if(!Number.isNaN(kg)&&!Number.isNaN(reps)) return Math.round(kg*reps);
  if(!Number.isNaN(reps)) return Math.round(reps);
  return "";
}
function isRecoveryLike(week,day,ex) {
  const cfg = getExerciseConfig(exerciseName(week,day,ex));
  return cfg.category==="conditioning" || cfg.category==="recovery" || /^cond$/i.test(ex) || /^rec$/i.test(ex);
}
function exerciseHasDone(week,day,ex) {
  if(blockDoneOf(week,day,ex)) return true;
  const c=setCountOf(week,day,ex);
  for(let i=0;i<c;i++) if(String(getSet(week,day,ex,i).done||"")==="1") return true;
  return false;
}
function getExercisesForWeekDay(week,day) {
  const ids=[], seen=new Set();
  Object.keys(state).forEach(k => {
    let m=k.match(new RegExp(`^(?:sc|note|interval|rest|exname|exlabel|exss|excode|hidden|blockdone)_w${week}_${day}_(.+)$`));
    if(!m) m=k.match(new RegExp(`^w${week}_${day}_(.+?)_s\d+$`));
    if(m) {
      const ex=m[1];
      if(!seen.has(ex)) { seen.add(ex); ids.push(ex); }
    }
  });
  return ids.filter(ex => !hiddenOf(week,day,ex)).sort((a,b) => {
    const ac = codeOf(week,day,a).match(/^([A-Z])(\d+)?$/);
    const bc = codeOf(week,day,b).match(/^([A-Z])(\d+)?$/);
    const ar = isRecoveryLike(week,day,a), br = isRecoveryLike(week,day,b);
    if(ar !== br) return ar ? 1 : -1;
    if(ac && bc) {
      if(ac[1] !== bc[1]) return ac[1].localeCompare(bc[1]);
      return Number(ac[2] || 0) - Number(bc[2] || 0);
    }
    if(ac && !bc) return -1;
    if(!ac && bc) return 1;
    return a.localeCompare(b);
  });
}
function allDaysInWeek(week) { return DAY_ORDER.filter(day => getExercisesForWeekDay(week,day).length); }
function getFirstDay(week) { return allDaysInWeek(week)[0] || "mon"; }
function dayStatus(week,day) {
  const exs = getExercisesForWeekDay(week,day);
  if(!exs.length) {
    if(day === "sat" || day === "sun") return "rest";
    return "none";
  }
  let regularDone=false, recoveryDone=false, hasRegular=false;
  exs.forEach(ex => {
    if(isRecoveryLike(week,day,ex)) { if(exerciseHasDone(week,day,ex)) recoveryDone=true; }
    else { hasRegular=true; if(exerciseHasDone(week,day,ex)) regularDone=true; }
  });
  if(regularDone) return "done";
  if(recoveryDone) return "recovery";
  if(hasRegular || exs.length) return "planned";
  return "none";
}
function dateToProgramDay(date) {
  const slot = mapDateToProgramSlot(date);
  if(!slot) return null;
  return { ...slot, status: dayStatus(slot.week, slot.day) };
}
function exerciseSetsSummary(week,day,ex) {
  const parts=[], c=setCountOf(week,day,ex);
  for(let i=0;i<c;i++) { const s=getSet(week,day,ex,i); parts.push(`${s.kg||"—"} × ${s.reps||"—"}`); }
  return parts.join(" • ");
}
function findLastOccurrence(week,day,name) {
  const target = normalizeExerciseKey(name);
  const currentDate = dayDate(week,day);
  let best=null;
  for(const w of getWeeks()) for(const d of DAY_ORDER) {
    const dd = dayDate(w,d);
    if(dd >= currentDate) continue;
    for(const ex of getExercisesForWeekDay(w,d)) {
      if(normalizeExerciseKey(exerciseName(w,d,ex)) !== target) continue;
      const hasContent = exerciseSetsSummary(w,d,ex).replace(/[—•\s]/g,"").length > 0 || !!noteOf(w,d,ex) || !!restOf(w,d,ex);
      if(!hasContent) continue;
      if(!best || dd > best.date) best = {week:w,day:d,ex,date:dd};
    }
  }
  return best;
}
function createUniqueExerciseId(week,day,baseId) {
  const existing = new Set(getExercisesForWeekDay(week,day));
  if(!existing.has(baseId)) return baseId;
  let i=2; while(existing.has(`${baseId}_${i}`)) i++;
  return `${baseId}_${i}`;
}
function ensureExerciseExists(week,day,exId,name) {
  state[`exname_w${week}_${day}_${exId}`] = normalizeExerciseDisplayName(name);
  if(!state[`sc_w${week}_${day}_${exId}`]) state[`sc_w${week}_${day}_${exId}`] = 1;
  if(!state[`w${week}_${day}_${exId}_s0`]) state[`w${week}_${day}_${exId}_s0`] = {kg:"",reps:"",done:""};
}
function progressionDelta(name) {
  const t=String(name).toLowerCase();
  if(t.includes("squat")||t.includes("deadlift")||t.includes("bench")||t.includes("strict press")) return 2.5;
  if(t.includes("db")||t.includes("curl")||t.includes("raise")||t.includes("lunge")) return 1;
  return 1;
}
function historyPreview(displayName) {
  const hist = findLastOccurrence(ui.week,ui.day,displayName);
  if(!hist) return null;
  return {
    ...hist,
    dateLabel: fmtFullDate(hist.date),
    summary: exerciseSetsSummary(hist.week,hist.day,hist.ex),
    rest: restOf(hist.week,hist.day,hist.ex),
    note: noteOf(hist.week,hist.day,hist.ex)
  };
}
function searchExercisesGlobal(query) {
  const q = String(query || "").trim().toLowerCase();
  if(!q) return [];
  const out = [];
  for(const week of getWeeks()) for(const day of DAY_ORDER) {
    for(const ex of getExercisesForWeekDay(week,day)) {
      const name = exerciseName(week,day,ex);
      const code = codeOf(week,day,ex);
      const hay = `${name} ${ex} ${code}`.toLowerCase();
      if(!hay.includes(q)) continue;
      out.push({
        week, day, ex, name, code,
        date: dayDate(week,day),
        dateLabel: fmtFullDate(dayDate(week,day))
      });
    }
  }
  return out.sort((a,b) => a.date - b.date).slice(0,12);
}

function copyHistoryTo(week,day,exId,preview,mode) {
  const c = setCountOf(preview.week,preview.day,preview.ex);
  state[`sc_w${week}_${day}_${exId}`] = Math.max(1,c);
  for(let i=0;i<c;i++) {
    const src=getSet(preview.week,preview.day,preview.ex,i);
    const copy={kg:src.kg||"", reps:src.reps||"", done:""};
    if(mode==="copy_increase") {
      const kg = num(copy.kg);
      if(!Number.isNaN(kg)&&kg>0) copy.kg = Math.round((kg + progressionDelta(exerciseName(preview.week,preview.day,preview.ex))) * 100) / 100;
    }
    state[`w${week}_${day}_${exId}_s${i}`] = copy;
  }
  if(preview.rest) state[`rest_w${week}_${day}_${exId}`] = preview.rest;
  if(preview.note) state[`note_w${week}_${day}_${exId}`] = preview.note;
}
function addExercise(scope,displayName,historyMode) {
  const nice = normalizeExerciseDisplayName(displayName);
  const baseId = suggestedExerciseId(nice);
  const preview = historyPreview(nice);
  const targets = scope==="weekday_all" ? getWeeks().map(w => [w, ui.day]) : [[ui.week, ui.day]];
  targets.forEach(([week,day]) => {
    const exId = createUniqueExerciseId(week,day,baseId);
    ensureExerciseExists(week,day,exId,nice);
    if(preview && historyMode!=="empty") copyHistoryTo(week,day,exId,preview,historyMode);
  });
  saveState();
}
function deleteExercise(week,day,ex) {
  Object.keys(state).forEach(k => {
    if(new RegExp(`^(?:sc|note|interval|rest|exname|exlabel|exss|excode|hidden|blockdone)_w${week}_${day}_${ex}$`).test(k)) delete state[k];
    if(new RegExp(`^w${week}_${day}_${ex}_s\d+$`).test(k)) delete state[k];
  });
  saveState();
}
function computeRadar(week, day=null) {
  const totals={chest:0,back:0,shoulders:0,arms:0,quads:0,posterior:0,core:0,conditioning:0};
  const days = day ? [day] : allDaysInWeek(week);
  for(const d of days) for(const ex of getExercisesForWeekDay(week,d)) {
    const name = `${exerciseName(week,d,ex)} ${noteOf(week,d,ex)}`.toLowerCase();
    const c = setCountOf(week,d,ex);
    Object.entries(MUSCLE_HINTS).forEach(([k,hints]) => {
      if(hints.some(h => name.includes(h))) totals[k] += c;
    });
  }
  return totals;
}
function computeRadarLifetime() {
  const totals={chest:0,back:0,shoulders:0,arms:0,quads:0,posterior:0,core:0,conditioning:0};
  for(const week of getWeeks()) {
    const weekTotals = computeRadar(week);
    Object.keys(totals).forEach(k => totals[k] += weekTotals[k] || 0);
  }
  return totals;
}

// ===== UI STATE =====
let ui={week:getInitialWeek(), day:getFirstDay(getInitialWeek()), month:new Date(TODAY.getFullYear(), TODAY.getMonth(), 1), search:"", workoutMode:false, activeExerciseIndex:0, radarMode:"day", calendarCollapsed:false};
function goToday() {
  const info = dateToProgramDay(TODAY);
  ui.month = new Date(TODAY.getFullYear(), TODAY.getMonth(), 1);
  if(info) { ui.week=info.week; ui.day=info.day; }
  else { ui.week=getInitialWeek(); ui.day=getFirstDay(ui.week); }
  renderApp();
}

// ===== STABILITY HELPERS =====
function ensureElement(id) {
  return document.getElementById(id);
}
function safeSetText(id, value) {
  const el = ensureElement(id);
  if (el) el.textContent = value;
}
function safeSetHTML(id, value) {
  const el = ensureElement(id);
  if (el) el.innerHTML = value;
}
function getCurrentDayExercises() {
  try { return getExercisesForWeekDay(ui.week, ui.day) || []; }
  catch { return []; }
}
function hasRenderableWorkout() {
  return getCurrentDayExercises().length > 0;
}
function getWorkoutStatsSafe() {
  const exs = getCurrentDayExercises();
  let totalSets = 0, doneSets = 0, totalVol = 0;
  exs.forEach(ex => {
    const count = Math.max(0, Number(setCountOf(ui.week, ui.day, ex) || 0));
    totalSets += count;
    for (let i = 0; i < count; i++) {
      const s = getSet(ui.week, ui.day, ex, i);
      if (String(s.done || "") === "1") doneSets += 1;
      const v = setVolume(s);
      if (v) totalVol += Number(v);
    }
    if (blockDoneOf(ui.week, ui.day, ex) && isRecoveryLike(ui.week, ui.day, ex)) {
      doneSets = Math.max(doneSets, 1);
    }
  });
  return { exs, totalSets, doneSets, totalVol };
}

// ===== RENDER: METRICS =====
function renderMetrics() {
  const exs = getExercisesForWeekDay(ui.week,ui.day);
  const totalSets = exs.reduce((sum,ex)=>sum+setCountOf(ui.week,ui.day,ex),0);
  const doneSets = exs.reduce((sum,ex)=> {
    let c=0; for(let i=0;i<setCountOf(ui.week,ui.day,ex);i++) if(String(getSet(ui.week,ui.day,ex,i).done||"")==="1") c++;
    if(blockDoneOf(ui.week,ui.day,ex) && isRecoveryLike(ui.week,ui.day,ex)) c=Math.max(c,1);
    return sum+c;
  },0);
  const totalVol = exs.reduce((sum,ex)=> {
    let v=0; for(let i=0;i<setCountOf(ui.week,ui.day,ex);i++) { const x=setVolume(getSet(ui.week,ui.day,ex,i)); if(x) v+=x; }
    return sum+v;
  },0);
  const groups = new Set(exs.map(ex => (codeOf(ui.week,ui.day,ex).match(/^([A-Z])/)||["","•"])[1])).size;
  document.getElementById("metrics").innerHTML = `
    <div class="metric"><div class="k">Week</div><div class="v">W${ui.week}</div><div class="s">${weekRangeLabel(ui.week)}</div></div>
    <div class="metric"><div class="k">Day</div><div class="v">${DAY_LABEL[ui.day]}</div><div class="s">${fmtFullDate(dayDate(ui.week,ui.day))}</div></div>
    <div class="metric"><div class="k">Blocks</div><div class="v">${groups||0}</div><div class="s">${exs.length} exercises</div></div>
    <div class="metric"><div class="k">Volume</div><div class="v">${totalVol ? totalVol.toLocaleString("en-GB") : 0} kg</div><div class="s">${doneSets} / ${totalSets} sets done</div></div>
  `;
  document.getElementById("weekHeader").textContent = "";
}

// ===== RENDER: CALENDAR =====
function renderCalendar() {
  document.getElementById("monthTitle").innerHTML = `<span class="month-pill">${ui.month.toLocaleDateString("en-GB", {month:"long",year:"numeric"})}</span>`;
  document.getElementById("monthSubtitle").textContent = `Month view`;
  const calendarCard = document.getElementById("calendarCard");
  const toggleBtn = document.getElementById("calendarToggleBtn");
  if(calendarCard) calendarCard.classList.toggle("is-collapsed", !!ui.calendarCollapsed);
  if(toggleBtn) toggleBtn.textContent = ui.calendarCollapsed ? "Show" : "Hide";
  document.getElementById("weekdayRow").innerHTML = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(x=>`<div>${x}</div>`).join("");
  const y=ui.month.getFullYear(), m=ui.month.getMonth(), first=new Date(y,m,1), last=new Date(y,m+1,0);
  const startOffset=(first.getDay()+6)%7, cells=[];
  for(let i=0;i<startOffset;i++) cells.push(null);
  for(let d=1;d<=last.getDate();d++) cells.push(new Date(y,m,d));
  while(cells.length%7!==0) cells.push(null);
  document.getElementById("calendarGrid").innerHTML = cells.map(d => {
    if(!d) return `<div class="daycell inactive"></div>`;
    const info = dateToProgramDay(d);
    const status = info ? info.status : "";
    const dot = status==="done" ? "var(--green)" : (status==="recovery" || status==="rest") ? "var(--yellow)" : info ? "var(--blue)" : "transparent";
    const check = status==="done" || status==="recovery";
    const active = info && info.week===ui.week && info.day===ui.day;
    const isToday = d.getFullYear()===TODAY.getFullYear() && d.getMonth()===TODAY.getMonth() && d.getDate()===TODAY.getDate();
    return `<div class="daycell ${active?'active':''} ${isToday?'today':''}" data-date="${d.toISOString()}">
      <div class="d">${d.getDate()}</div>
      ${check ? `<div class="daycheck" style="color:${dot}">✓</div>` : ""}
      <div class="w">${info ? DAY_LABEL[info.day].slice(0,3)+`<br>W${info.week}` : ""}</div>
      <div class="daydot" style="background:${dot}"></div>
    </div>`;
  }).join("");
  document.querySelectorAll(".daycell[data-date]").forEach(el => el.onclick = () => {
    const info = dateToProgramDay(new Date(el.dataset.date));
    if(info) {
      ui.week = info.week;
      ui.day = info.day;
      ui.month = new Date(new Date(el.dataset.date).getFullYear(), new Date(el.dataset.date).getMonth(), 1);
      ui.activeExerciseIndex = 0;
      renderApp();
    }
  });
}

// ===== RENDER: DAY PILLS =====
function renderDays() {
  const pills = DAY_ORDER.map(day => `<div class="pill ${day===ui.day?'active':''}" data-day="${day}">${DAY_LABEL[day]}</div>`).join("");
  document.getElementById("dayPills").innerHTML = pills;
  const mobile=document.getElementById("mobileDayPills"); if(mobile) mobile.innerHTML = pills;
  document.querySelectorAll("[data-day]").forEach(el => el.onclick = () => { ui.day=el.dataset.day; ui.activeExerciseIndex=0; renderApp(); });
}

// ===== RENDER: RADAR =====
function renderRadar() {
  const svg = document.getElementById("radarSvg");
  const legend = document.getElementById("radarLegend");
  const footnote = document.getElementById("radarFootnote");
  const totals = ui.radarMode==="day" ? computeRadar(ui.week, ui.day) : (ui.radarMode==="week" ? computeRadar(ui.week) : computeRadarLifetime());
  const title = document.getElementById("radarTitle");
  if(title) title.textContent = "Muscular Radar";
  document.querySelectorAll("[data-radar-mode]").forEach(btn => btn.classList.toggle("active", btn.dataset.radarMode===ui.radarMode));

  const axes = [
    ["chest","Chest","#ffb84d"],
    ["back","Back","#ff7a45"],
    ["shoulders","Shoulders","#58a6ff"],
    ["arms","Arms","#48c6ff"],
    ["quads","Quads","#4dd4ac"],
    ["posterior","Posterior","#6be675"],
    ["core","Core","#9de05e"],
    ["conditioning","Conditioning","#ffd24d"]
  ];
  const values = axes.map(([k]) => totals[k] || 0);
  const max = Math.max(1, ...values);
  const total = values.reduce((a,b)=>a+b,0);
  const strongestIdx = values.indexOf(Math.max(...values));
  const strongestLabel = axes[strongestIdx]?.[1] || "Balanced";
  const strongestValue = values[strongestIdx] || 0;
  const cx=160, cy=160, r=116, rings=5;
  const minVisibleRadius = 26;

  const pointFor = (radius, i) => {
    const a = -Math.PI/2 + i * (Math.PI*2/axes.length);
    return {x: cx + Math.cos(a)*radius, y: cy + Math.sin(a)*radius};
  };

  const scaledRadiusFor = value => {
    if(value <= 0) return 0;
    const normalized = value / max;
    return minVisibleRadius + normalized * (r - minVisibleRadius);
  };

  let out = `<defs>
      <radialGradient id="radarGlow" cx="50%" cy="45%" r="72%">
        <stop offset="0%" stop-color="rgba(255,255,255,.09)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
      <filter id="radarSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="6" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect x="0" y="0" width="320" height="320" rx="28" fill="#09182d"/>
    <rect x="0" y="0" width="320" height="320" rx="28" fill="url(#radarGlow)"/>`;

  for(let ring=1; ring<=rings; ring++) {
    const rr = r * ring / rings;
    const pts = axes.map((_,i) => {
      const p = pointFor(rr, i);
      return `${p.x},${p.y}`;
    }).join(" ");
    out += `<polygon points="${pts}" fill="none" stroke="rgba(255,255,255,${ring===rings ? '.10' : '.07'})" stroke-width="${ring===rings ? 1.3 : 1}"/>`;
  }

  axes.forEach(([, , ],i) => {
    const p = pointFor(r, i);
    out += `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(255,255,255,.08)" stroke-width="1"/>`;
  });

  const pts = axes.map(([k,label,color], i) => {
    const rr = scaledRadiusFor(totals[k] || 0);
    const p = pointFor(rr, i);
    return {...p, color, key:k, value:totals[k] || 0};
  });

  const outlinePts = pts.map(p => `${p.x},${p.y}`).join(" ");
  out += `<polygon points="${outlinePts}" fill="rgba(242,201,76,.10)" stroke="rgba(242,201,76,.78)" stroke-width="2.2" filter="url(#radarSoftGlow)"/>`;
  out += `<polygon points="${outlinePts}" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.16)" stroke-width="1"/>`;

  pts.forEach((p) => {
    if(p.value <= 0) return;
    out += `<circle cx="${p.x}" cy="${p.y}" r="4.8" fill="${p.color}" stroke="#09182d" stroke-width="1.8"/>`;
  });

  svg.innerHTML = out;

  if(legend){
    legend.innerHTML = axes.map(([k,label,color]) => `<div class="radar-legend-item"><span class="radar-legend-dot" style="background:${color}"></span><span>${label}</span></div>`).join("");
  }
  if(footnote){
    footnote.textContent = strongestValue ? `Strongest area: ${strongestLabel} · ${strongestValue} set${strongestValue===1?'':'s'} · scale optimized for low-volume visibility` : `No volume yet for this ${ui.radarMode} view.`;
  }
}

function refreshScopeLabels() {
  const sel = document.getElementById("addScope");
  if(!sel) return;
  const current = sel.value;
  sel.innerHTML = `
    <option value="day">Only ${DAY_LABEL[ui.day]}</option>
    <option value="weekday_all">Every ${DAY_LABEL[ui.day]} in plan</option>
  `;
  sel.value = current || "day";
}

// ===== RENDER: ADD EXERCISE PREVIEW =====
function renderHistoryPreview() {
  const box = document.getElementById("historyPreview");
  if(!box) return;
  const name = document.getElementById("addExerciseName").value.trim();
  if(!name) {
    box.innerHTML = ``;
    return;
  }
  const preview = historyPreview(name);
  if(!preview) {
    box.innerHTML = ``;
    return;
  }
  box.innerHTML = ``;
}

function getWorkoutGroups(exercises){
  const groups = [];
  let currentKey = null;
  exercises.forEach(ex => {
    const code = codeOf(ui.week,ui.day,ex);
    const block = (code.match(/^([A-Z])/) || [null,"•"])[1];
    if(block !== currentKey){
      currentKey = block;
      groups.push({ block, items: [] });
    }
    groups[groups.length-1].items.push(ex);
  });
  return groups;
}

function getWorkoutSummaryStats(week,day){
  const all = getExercisesForWeekDay(week,day);
  let totalSets = 0;
  let totalVolume = 0;
  all.forEach(ex => {
    if(isRecoveryLike(week,day,ex)) return;
    const c = setCountOf(week,day,ex);
    totalSets += c;
    for(let i=0;i<c;i++){
      const v = setVolume(getSet(week,day,ex,i));
      if(v) totalVolume += Number(v) || 0;
    }
  });
  return { exercises: all.length, sets: totalSets, volume: totalVolume };
}
function openFinishSummary(stats){
  const overlay = document.getElementById("finishSummaryOverlay");
  if(!overlay) return;
  const ex = document.getElementById("finishExercisesValue");
  const sets = document.getElementById("finishSetsValue");
  const vol = document.getElementById("finishVolumeValue");
  const subline = document.getElementById("finishSummarySubline");
  if(ex) ex.textContent = String(stats.exercises || 0);
  if(sets) sets.textContent = String(stats.sets || 0);
  if(vol) vol.textContent = `${(stats.volume || 0).toLocaleString("en-GB")} kg`;
  if(subline) {
    const finished = (stats.exercises || 0) === 1 ? "1 exercise logged." : `${stats.exercises || 0} exercises logged.`;
    subline.textContent = finished;
  }
  overlay.style.display = "flex";
  requestAnimationFrame(() => overlay.classList.add("is-visible"));
}
function closeFinishSummary(){
  const overlay = document.getElementById("finishSummaryOverlay");
  if(!overlay) return;
  overlay.classList.remove("is-visible");
  setTimeout(() => {
    overlay.style.display = "none";
  }, 220);
}

function markEntireWorkoutDone(){
  const all = getExercisesForWeekDay(ui.week, ui.day);
  all.forEach(ex => {
    if(isRecoveryLike(ui.week,ui.day,ex)){
      state[`blockdone_w${ui.week}_${ui.day}_${ex}`] = "1";
    } else {
      const count = setCountOf(ui.week,ui.day,ex);
      for(let i=0;i<count;i++){
        const s = getSet(ui.week,ui.day,ex,i);
        s.done = "1";
      }
    }
  });
  saveState();
}
function finishWorkoutNow(){
  const stats = getWorkoutSummaryStats(ui.week, ui.day);
  markEntireWorkoutDone();
  ui.workoutMode = false;
  const btn = document.getElementById("workoutModeBtn");
  if(btn) btn.textContent = "WORKOUT MODE";
  renderApp();
  openFinishSummary(stats);
}


// ===== RENDER: EXERCISE LIST =====
function renderExercises() {
  const q = ui.search.trim().toLowerCase();
  const dayExercises = getExercisesForWeekDay(ui.week,ui.day);
  const filteredDayExercises = dayExercises.filter(ex => {
    if(!q) return true;
    return exerciseName(ui.week,ui.day,ex).toLowerCase().includes(q) || ex.toLowerCase().includes(q) || codeOf(ui.week,ui.day,ex).toLowerCase().includes(q);
  });
  const searchMatches = q ? searchExercisesGlobal(q) : [];
  const all = filteredDayExercises;
  const allGroups = getWorkoutGroups(all);
  if(ui.activeExerciseIndex > Math.max(0, allGroups.length - 1)) ui.activeExerciseIndex = Math.max(0, allGroups.length - 1);
  const activeGroup = allGroups[ui.activeExerciseIndex] || null;
  const list = ui.workoutMode ? (activeGroup ? activeGroup.items : []) : all;
  const groups = ui.workoutMode ? (activeGroup ? [activeGroup] : []) : allGroups;
  const wrap = document.getElementById("exerciseList");
  const searchHost = document.getElementById("searchResultsHost");
  const progressRow = ui.workoutMode ? `<div class="workout-progress-row">${allGroups.map((group, idx) => {
    const done = group.items.every(ex => exerciseHasDone(ui.week,ui.day,ex));
    const cls = idx===ui.activeExerciseIndex ? "active" : (done ? "done" : "");
    return `<button class="workout-progress-pill ${cls}" type="button" data-workout-jump="${idx}">${idx+1}</button>`;
  }).join("")}</div>` : "";
  const focusMeta = ui.workoutMode ? `Block ${Math.min(ui.activeExerciseIndex+1, Math.max(1,allGroups.length))} of ${Math.max(1,allGroups.length)}` : "";
  const focus = ui.workoutMode ? `<div class="card workout-focus-card"><div class="workout-date-big">${fmtFullDate(dayDate(ui.week,ui.day))}</div><div class="section-title"><h3>${focusMeta}</h3></div>${progressRow}<div class="workout-nav-row"><button class="btn" id="prevExerciseBtn">← Previous</button><button class="btn" id="nextExerciseBtn">Next →</button></div></div>` : "";
  const searchBox = q ? `<div class="card search-results-card"><div class="section-title"><h3>Search results</h3><div class="meta">${searchMatches.length} match${searchMatches.length===1?'':'es'}</div></div>${searchMatches.length ? `<div class="search-results">${searchMatches.map(m => `<button class="search-item" type="button" data-jump-week="${m.week}" data-jump-day="${m.day}" data-jump-ex="${m.ex}"><div><div class="name">${esc(m.name)}</div><div class="meta">${esc(m.dateLabel)} · ${DAY_LABEL[m.day]} · ${esc(m.code || 'No code')}</div></div><div class="search-open">Open</div></button>`).join("")}</div>` : `<div class="empty-state">No matching exercises found yet.</div>`}</div>` : "";
  if(searchHost) searchHost.innerHTML = searchBox;
  const emptyMessage = "";
  wrap.className = ui.workoutMode ? "exercise-list workout-mode-shell" : "exercise-list";
  wrap.innerHTML = focus + (groups.length ? groups.map(group => {
    const blockKinds = group.items.map(ex => codeOf(ui.week,ui.day,ex)).filter(Boolean);
    const isSupersetBlock = blockKinds.some(c => /\d$/.test(c)) && group.items.length > 1;
    const groupInner = group.items.map(ex => {
        const code = codeOf(ui.week,ui.day,ex);
        const name = exerciseName(ui.week,ui.day,ex);
        const note = noteOf(ui.week,ui.day,ex);
        const rest = restOf(ui.week,ui.day,ex);
        const recovery = isRecoveryLike(ui.week,ui.day,ex);
        const done = exerciseHasDone(ui.week,ui.day,ex);
        const last = findLastOccurrence(ui.week,ui.day,name);
        const c = setCountOf(ui.week,ui.day,ex);
        const cfg = getExerciseConfig(name);
        const setsHtml = recovery ? "" : Array.from({length:c}, (_,i) => {
          const s = getSet(ui.week,ui.day,ex,i);
          return `<div class="setrow" data-setrow="${ex}_${i}">
            <div class="setn">${i+1}</div>
            <div class="setcol"><div class="k">kg</div><input class="setinput" inputmode="decimal" data-role="kg" data-ex="${ex}" data-idx="${i}" value="${esc(s.kg)}" /></div>
            <div class="setcol"><div class="k">reps</div><input class="setinput" inputmode="numeric" data-role="reps" data-ex="${ex}" data-idx="${i}" value="${esc(s.reps)}" /></div>
            <div class="setcol"><div class="k">volume</div><input class="setinput" data-role="volume" value="${setVolume(s)}" disabled /></div>
            <button class="donebtn ${String(s.done||'')==='1'?'on':''}" data-role="toggle-set" data-ex="${ex}" data-idx="${i}">${String(s.done||'')==='1'?'✓':'·'}</button>
          </div>`;
        }).join("");
        return `<div class="exercise ${/\d$/.test(code)?'superset':''} ${ui.workoutMode ? 'active-workout' : ''}" data-exercise-card="${ex}">
          <div class="exercise-main">
            <div class="left-main">
              <input class="codebox" data-role="code" data-ex="${ex}" value="${esc(code)}" />
              <div style="min-width:0;width:100%">
                <input class="exercise-name" data-role="name" data-ex="${ex}" value="${esc(name)}" />
                <div class="exercise-meta">${[ /\d$/.test(code) ? `Superset item ${code}` : code ? `Block item ${code}` : "", recovery ? "Recovery / conditioning" : "", cfg.weight ? "Weighted" : ""].filter(Boolean).join(" • ")}</div>
              </div>
            </div>
          </div>

          ${last ? `<div class="compare compact-last"><div class="info-box"><div class="k">Last</div><div class="v">${fmtShortDate(last.date)} • ${esc(exerciseSetsSummary(last.week,last.day,last.ex))}</div></div></div>` : ""}

          <div class="field-grid">
            <div class="label">Rest</div>
            <input class="field" data-role="rest" data-ex="${ex}" value="${esc(rest)}" />
          </div>
          <div class="field-grid">
            <div class="label">Notes</div>
            <textarea class="textarea" rows="1" data-role="note" data-ex="${ex}">${esc(note)}</textarea>
          </div>

          ${recovery ? `<div class="info-box" style="margin-top:12px"><div class="k">Completion</div><div class="v">${done ? "Done" : "Not done yet"}</div></div>` : ""}
          ${setsHtml ? `<div class="sets">${setsHtml}</div>` : ""}

          <div class="exercise-actions">
            ${recovery ? `<button class="btn gold" data-role="toggle-block" data-ex="${ex}">${done ? "Set as not done" : "Set as done"}</button>` : `<button class="btn" data-role="add-set" data-ex="${ex}">+ Set</button>`}
            <button class="btn" data-role="delete" data-ex="${ex}">Delete</button>
          </div>
        </div>`;
      }).join("");
    const blockLabel = group.block && group.block !== "•" ? group.block : "Single";
    const blockMeta = isSupersetBlock ? `Superset • ${group.items.length} exercises` : (group.items.length > 1 ? `${group.items.length} exercises` : `1 exercise`);
    const groupHeader = ui.workoutMode ? `` : `<div class="block-header"><div class="block-title"><div class="block-chip">${esc(blockLabel)}</div><div>${blockMeta}</div></div></div>`;
    return `<div class="block-group">${groupHeader}<div class="workout-group-stack">${groupInner}</div></div>`;
  }).join("") : ``) + (groups.length ? `<div class="end-panel-shell"><div class="workout-end-panel"><div class="finish-workout-inline-row"><button id="finishWorkoutBtnInline" class="finish-workout-inline-btn" type="button">Finish workout</button></div><div class="workout-end-actions" id="bottomBarInline"><button class="btn" id="bottomTimerBtn">⏱ Timer</button><button class="btn" id="bottomAddExerciseBtn">+ Exercise</button><button class="btn primary" id="bottomAddSetBtn">+ Set</button></div></div></div>` : ``) + emptyMessage;
  bindExerciseEvents(all);
  document.querySelectorAll("[data-workout-jump]").forEach(el => el.onclick = () => {
    ui.activeExerciseIndex = Number(el.dataset.workoutJump);
    renderExercises();
  });
  const finishWorkoutBtnInline = document.getElementById("finishWorkoutBtnInline");
  if(finishWorkoutBtnInline) finishWorkoutBtnInline.onclick = () => finishWorkoutNow();
  if(ui.workoutMode && activeGroup && activeGroup.items.length){
    const activeCard = document.querySelector(`[data-exercise-card="${activeGroup.items[0]}"]`);
    if(activeCard) activeCard.scrollIntoView({block:"nearest", behavior:"smooth"});
  }
}



// ===== EVENTS: EXERCISE INTERACTIONS =====
function bindExerciseEvents(all) {
  document.querySelectorAll("[data-role='kg'],[data-role='reps']").forEach(el => {
    el.oninput = e => {
      const s = getSet(ui.week,ui.day,e.target.dataset.ex,Number(e.target.dataset.idx));
      s[e.target.dataset.role] = e.target.value;
      updateSetVolumeForInput(e.target);
      saveStateQuiet("Autosaved draft locally.");
    };
    el.onfocus = e => { const row = e.target.closest(".setrow"); if(row) row.classList.add("input-row-active"); };
    el.onblur = e => { const row = e.target.closest(".setrow"); if(row) row.classList.remove("input-row-active"); };
    el.onchange = e => {
      const s = getSet(ui.week,ui.day,e.target.dataset.ex,Number(e.target.dataset.idx));
      s[e.target.dataset.role] = e.target.value;
      updateSetVolumeForInput(e.target);
      commitTextFieldWithoutRender();
    };
  });
  document.querySelectorAll("[data-role='toggle-set']").forEach(el => el.onclick = e => {
    const s = getSet(ui.week,ui.day,e.target.dataset.ex,Number(e.target.dataset.idx));
    s.done = String(s.done||"")==="1" ? "" : "1";
    saveState();
    showToast(String(s.done||"")==="1" ? "Set done" : "Set updated");
  });
  document.querySelectorAll("[data-role='toggle-block']").forEach(el => el.onclick = e => {
    const key = `blockdone_w${ui.week}_${ui.day}_${e.target.dataset.ex}`;
    state[key] = state[key]==="1" ? "" : "1";
    saveState();
  });
  document.querySelectorAll("[data-role='add-set']").forEach(el => el.onclick = e => {
    const ex = e.target.dataset.ex;
    const c = setCountOf(ui.week,ui.day,ex);
    state[`w${ui.week}_${ui.day}_${ex}_s${c}`] = {kg:"",reps:"",done:""};
    state[`sc_w${ui.week}_${ui.day}_${ex}`] = c+1;
    saveState();
  });
  document.querySelectorAll("[data-role='delete']").forEach(el => el.onclick = e => deleteExercise(ui.week,ui.day,e.target.dataset.ex));
  document.querySelectorAll("[data-role='name']").forEach(el => {
    el.oninput = e => {
      state[`exname_w${ui.week}_${ui.day}_${e.target.dataset.ex}`] = e.target.value;
      saveStateQuiet("Autosaved draft locally.");
    };
    el.onchange = e => {
      state[`exname_w${ui.week}_${ui.day}_${e.target.dataset.ex}`] = normalizeExerciseDisplayName(e.target.value);
      e.target.value = state[`exname_w${ui.week}_${ui.day}_${e.target.dataset.ex}`];
      commitTextFieldWithoutRender();
    };
  });
  document.querySelectorAll("[data-role='code']").forEach(el => {
    el.oninput = e => {
      state[`excode_w${ui.week}_${ui.day}_${e.target.dataset.ex}`] = String(e.target.value||"").toUpperCase().trim();
      saveStateQuiet("Autosaved draft locally.");
    };
    el.onchange = e => {
      state[`excode_w${ui.week}_${ui.day}_${e.target.dataset.ex}`] = String(e.target.value||"").toUpperCase().trim();
      e.target.value = state[`excode_w${ui.week}_${ui.day}_${e.target.dataset.ex}`];
      commitTextFieldWithoutRender();
    };
  });
  document.querySelectorAll("[data-role='rest']").forEach(el => {
    el.oninput = e => {
      state[`rest_w${ui.week}_${ui.day}_${e.target.dataset.ex}`] = e.target.value;
      saveStateQuiet("Autosaved draft locally.");
    };
    el.onchange = e => {
      state[`rest_w${ui.week}_${ui.day}_${e.target.dataset.ex}`] = e.target.value;
      commitTextFieldWithoutRender();
    };
  });
  document.querySelectorAll("[data-role='note']").forEach(el => {
    el.oninput = e => {
      state[`note_w${ui.week}_${ui.day}_${e.target.dataset.ex}`] = e.target.value;
      saveStateQuiet("Autosaved draft locally.");
    };
    el.onchange = e => {
      state[`note_w${ui.week}_${ui.day}_${e.target.dataset.ex}`] = e.target.value;
      commitTextFieldWithoutRender();
    };
  });
  document.querySelectorAll("[data-jump-week][data-jump-day][data-jump-ex]").forEach(el => el.onclick = e => {
    ui.week = Number(e.currentTarget.dataset.jumpWeek);
    ui.day = e.currentTarget.dataset.jumpDay;
    ui.search = "";
    const input = document.getElementById("searchInput");
    if(input) input.value = "";
    const currentDayExercises = getExercisesForWeekDay(ui.week, ui.day);
    const targetEx = e.currentTarget.dataset.jumpEx;
    ui.activeExerciseIndex = Math.max(0, currentDayExercises.indexOf(targetEx));
    renderApp();
    const targetCard = document.querySelector(`[data-exercise-card="${targetEx}"]`);
    if(targetCard) targetCard.scrollIntoView({block:"center", behavior:"smooth"});
  });
  const prev=document.getElementById("prevExerciseBtn"), next=document.getElementById("nextExerciseBtn");
  if(prev) prev.onclick=()=>{ ui.activeExerciseIndex=Math.max(0,ui.activeExerciseIndex-1); renderExercises(); };
  if(next) next.onclick=()=>{ const count=getWorkoutGroups(getExercisesForWeekDay(ui.week,ui.day).filter(ex => { const q = ui.search.trim().toLowerCase(); if(!q) return true; return exerciseName(ui.week,ui.day,ex).toLowerCase().includes(q) || ex.toLowerCase().includes(q) || codeOf(ui.week,ui.day,ex).toLowerCase().includes(q); })).length; ui.activeExerciseIndex=Math.min(Math.max(0,count-1),ui.activeExerciseIndex+1); renderExercises(); };
}
function handleWorkoutModeKeydown(e){
  if(!ui.workoutMode) return;
  const count = getWorkoutGroups(getExercisesForWeekDay(ui.week,ui.day).filter(ex => {
    const q = ui.search.trim().toLowerCase();
    if(!q) return true;
    return exerciseName(ui.week,ui.day,ex).toLowerCase().includes(q) || ex.toLowerCase().includes(q) || codeOf(ui.week,ui.day,ex).toLowerCase().includes(q);
  })).length;
  if(e.key==="ArrowRight"){ ui.activeExerciseIndex=Math.min(Math.max(0,count-1),ui.activeExerciseIndex+1); renderExercises(); }
  if(e.key==="ArrowLeft"){ ui.activeExerciseIndex=Math.max(0,ui.activeExerciseIndex-1); renderExercises(); }
}
document.addEventListener("keydown", handleWorkoutModeKeydown);
function renderAddScopeLabels() {
  const scope = document.getElementById("addScope");
  if(!scope) return;
  const dayName = DAY_LABEL[ui.day] || "day";
  const opts = scope.querySelectorAll("option");
  if(opts[0]) opts[0].textContent = `Only ${dayName}`;
  if(opts[1]) opts[1].textContent = `Every ${dayName} in plan`;
}

// ===== APP RENDER ENTRY =====
function renderApp() {
    renderMetrics();
  renderCalendar();
  renderDays();
  refreshScopeLabels();
  renderRadar();
  renderExercises();
  renderHistoryPreview();
  renderAddScopeLabels();
  const dl=document.getElementById("exerciseSuggestions");
  if(dl) dl.innerHTML = getExerciseSuggestions("").map(x=>`<option value="${x}"></option>`).join("");
}

function render() { return renderApp(); }
const searchInput = document.getElementById("searchInput");
if(searchInput) searchInput.oninput = e => { ui.search=e.target.value; renderExercises(); };
document.getElementById("workoutModeBtn").onclick = () => {
  ui.workoutMode=!ui.workoutMode; ui.activeExerciseIndex=0;
  document.getElementById("workoutModeBtn").textContent = ui.workoutMode ? "EXIT WORKOUT" : "WORKOUT MODE";
  renderExercises();
};
document.getElementById("prevMonthBtn").onclick = () => { ui.month=new Date(ui.month.getFullYear(), ui.month.getMonth()-1, 1); renderCalendar(); };
document.getElementById("nextMonthBtn").onclick = () => { ui.month=new Date(ui.month.getFullYear(), ui.month.getMonth()+1, 1); renderCalendar(); };
document.getElementById("addExerciseName").oninput = e => {
  const dl=document.getElementById("exerciseSuggestions");
  dl.innerHTML = getExerciseSuggestions(e.target.value).map(x=>`<option value="${x}"></option>`).join("");
  renderHistoryPreview();
};
document.querySelectorAll("[data-radar-mode]").forEach(btn => btn.onclick = () => { ui.radarMode = btn.dataset.radarMode; renderRadar(); });
document.getElementById("addExerciseBtn").onclick = () => {
  const name=document.getElementById("addExerciseName").value.trim();
  if(!name) return;
  addExercise(document.getElementById("addScope").value, name, document.getElementById("addHistoryMode").value);
  document.getElementById("addExerciseName").value="";
  document.getElementById("addHistoryMode").value="empty";
  renderHistoryPreview();
};
const bottomAddExerciseBtn = document.getElementById("bottomAddExerciseBtn");
if(bottomAddExerciseBtn) bottomAddExerciseBtn.onclick = () => {
  const target = document.getElementById("addExerciseName");
  if(target) {
    target.scrollIntoView({block:"center", behavior:"smooth"});
    setTimeout(() => target.focus(), 250);
  }
};
const bottomAddSetBtn = document.getElementById("bottomAddSetBtn");
if(bottomAddSetBtn) bottomAddSetBtn.onclick = () => {
  const exs = getExercisesForWeekDay(ui.week, ui.day);
  let active = null;
  if(ui.workoutMode){
    active = exs[ui.activeExerciseIndex] || null;
  }
  if(!active || isRecoveryLike(ui.week, ui.day, active)) {
    active = exs.find(ex => !isRecoveryLike(ui.week, ui.day, ex)) || null;
  }
  if(!active) {
    showToast("No strength exercise selected");
    return;
  }
  const c = setCountOf(ui.week,ui.day,active);
  state[`w${ui.week}_${ui.day}_${active}_s${c}`] = {kg:"",reps:"",done:""};
  state[`sc_w${ui.week}_${ui.day}_${active}`] = c+1;
  saveState();
  showToast("Set added");
  const card = document.querySelector(`[data-exercise-card="${active}"]`);
  if(card) card.scrollIntoView({block:"center", behavior:"smooth"});
};
const exportBtn = document.getElementById("exportBtn");
if(exportBtn) exportBtn.onclick = () => {
  const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="timo_training_v81_export.json";
  a.click();
  URL.revokeObjectURL(a.href);
};
const importFile = document.getElementById("importFile");
if(importFile) importFile.onchange = async e => {
  const file=e.target.files?.[0];
  if(!file) return;
  try { state=JSON.parse(await file.text()); saveState(); } catch { alert("Import failed."); }
  e.target.value="";
};

window.addEventListener("beforeunload", () => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
});



const SUPABASE_URL = "https://krpbqzhttgelrbhkohct.supabase.co";
const SUPABASE_KEY = "sb_publishable_Ea08srA5UXkyRBx00sIQFw_hEQ8u_7t";
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
let currentUser = null;
let cloudSaveTimer = null;
let cloudReady = false;
let applyingCloudState = false;
let initialSyncResolved = false;

function showBoot(message="Loading your data…") {
  const overlay = document.getElementById("bootOverlay");
  const msg = document.getElementById("bootMessage");
  if(msg) msg.textContent = message;
  if(overlay) overlay.style.display = "flex";
}
function hideBoot() {
  const overlay = document.getElementById("bootOverlay");
  if(overlay) overlay.style.display = "none";
}
function withTimeout(promise, ms=4000) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("Cloud timeout")), ms))
  ]);
}
function setSyncStatus(text) {
  const el = ensureElement("syncStatus");
  if(!el) return;
  const value = String(text || "");
  let label = value;
  let cls = "sync-pill";
  if(/synced|loaded|ready/i.test(value)) { label = "✔ Synced"; cls += " ok"; }
  else if(/syncing|connecting|loading/i.test(value)) { label = "⟳ Syncing"; cls += " info"; }
  else if(/failed|unavailable|error/i.test(value)) { label = "⚠ Offline"; cls += " warn"; }
  else if(/local only/i.test(value)) { label = "Local"; }
  else if(/sign in/i.test(value)) { label = "Sign in"; }
  el.className = cls;
  el.textContent = label;
}
function setAuthMessage(text, mode="") {
  const el = ensureElement("authMessage");
  if(!el) return;
  el.textContent = text || "";
  el.className = "auth-message" + (mode ? " " + mode : "");
}
function showAuth() {
  const overlay = document.getElementById("authOverlay");
  if(overlay) overlay.style.display = "flex";
  setSyncStatus("Cloud: sign in required");
}
function hideAuth() {
  const overlay = document.getElementById("authOverlay");
  if(overlay) overlay.style.display = "none";
}
function getLocalUpdatedAt() {
  return state && state._cloudMeta && state._cloudMeta.updated_at ? state._cloudMeta.updated_at : null;
}
function stampLocalUpdatedAt(iso) {
  if(!state._cloudMeta || typeof state._cloudMeta !== "object") state._cloudMeta = {};
  state._cloudMeta.updated_at = iso;
}
async function signInSupabase(email, password) {
  const { data, error } = await withTimeout(sb.auth.signInWithPassword({ email, password }), 5000);
  if(error) throw error;
  return data;
}
async function signUpSupabase(email, password) {
  const { data, error } = await withTimeout(sb.auth.signUp({ email, password }), 5000);
  if(error) throw error;
  return data;
}
async function fetchCloudRow() {
  if(!currentUser) return null;
  const { data, error } = await withTimeout(
    sb.from("app_state")
      .select("state_json, updated_at")
      .eq("user_id", currentUser.id)
      .maybeSingle(),
    5000
  );
  if(error) throw error;
  return data || null;
}
async function loadCloudState() {
  if(!currentUser) return false;
  const data = await fetchCloudRow();
  console.log("CLOUD DATA", data);
  if(data && data.state_json) {
    const cloudIso = data.updated_at || null;
    const localIso = getLocalUpdatedAt();
    const shouldUseCloud = !localIso || (cloudIso && cloudIso >= localIso);
    if(shouldUseCloud) {
      applyingCloudState = true;
      state = data.state_json;
      if(!state._cloudMeta || typeof state._cloudMeta !== "object") state._cloudMeta = {};
      state._cloudMeta.updated_at = cloudIso || new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      applyingCloudState = false;
      renderApp();
      setSyncStatus("Cloud: loaded");
      return true;
    } else {
      setSyncStatus("Cloud: local is newer");
      return false;
    }
  }
  setSyncStatus("Cloud: empty");
  return false;
}
async function saveCloudStateNow() {
  if(!currentUser || applyingCloudState || !initialSyncResolved) return false;
  const iso = new Date().toISOString();
  stampLocalUpdatedAt(iso);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const payload = {
    user_id: currentUser.id,
    state_json: state,
    updated_at: iso
  };
  const { error } = await withTimeout(
    sb.from("app_state").upsert(payload, { onConflict: "user_id" }),
    5000
  );
  if(error) {
    console.error(error);
    setSyncStatus("Cloud: save failed");
    return false;
  }
  setSyncStatus("Cloud: synced");
  return true;
}
function scheduleCloudSave() {
  if(!cloudReady || !currentUser || applyingCloudState || !initialSyncResolved) return;
  setSyncStatus("Cloud: syncing…");
  if(cloudSaveTimer) clearTimeout(cloudSaveTimer);
  cloudSaveTimer = setTimeout(() => {
    saveCloudStateNow();
  }, 700);
}

let cloudBootstrapInFlight = false;
async function startCloudBootstrap() {
  if(!currentUser || cloudBootstrapInFlight) return;
  cloudBootstrapInFlight = true;
  showBoot("Loading your cloud data…");
  setSyncStatus("Cloud: loading…");
  try {
    const loadedFromCloud = await loadCloudState();
    if(!loadedFromCloud) {
      await saveCloudStateNow();
    }
  } catch (e) {
    console.error("CLOUD BOOTSTRAP ERROR", e);
    setSyncStatus("Cloud: unavailable");
  } finally {
    cloudBootstrapInFlight = false;
    hideBoot();
  }
}

// ===== CLOUD / AUTH =====
async function initSupabaseApp() {
  const signInBtn = document.getElementById("signInBtn");
  const signUpBtn = document.getElementById("signUpBtn");

  if(signInBtn) signInBtn.onclick = async () => {
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;
    if(!email || !password) {
      setAuthMessage("Enter email and password.", "error");
      return;
    }
    setAuthMessage("Signing in…");
    try {
      await signInSupabase(email, password);
      setAuthMessage("");
    } catch (e) {
      console.error("SIGN IN ERROR", e);
      setAuthMessage(e.message || "Sign in failed.", "error");
    }
  };

  if(signUpBtn) signUpBtn.onclick = async () => {
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;
    if(!email || !password) {
      setAuthMessage("Enter email and password.", "error");
      return;
    }
    setAuthMessage("Creating account…");
    try {
      const result = await signUpSupabase(email, password);
      if(result?.user && !result?.session) setAuthMessage("Account created. Check your email and then sign in.", "ok");
      else setAuthMessage("Account created. You can continue.", "ok");
    } catch (e) {
      console.error("SIGN UP ERROR", e);
      setAuthMessage(e.message || "Sign up failed.", "error");
    }
  };

  sb.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;
    console.log("AUTH USER", currentUser);

    if(currentUser) {
      hideAuth();
      cloudReady = true;
      initialSyncResolved = true;
      setSyncStatus("Cloud: connecting…");
      startCloudBootstrap();
    } else {
      cloudReady = false;
      initialSyncResolved = true;
      hideBoot();
      showAuth();
      setSyncStatus("Cloud: local only");
    }
  });

  try {
    showBoot("Checking your session…");
    const { data } = await withTimeout(sb.auth.getSession(), 2500);
    currentUser = data?.session?.user || null;
    console.log("SESSION USER", currentUser);
  } catch (e) {
    console.error("SESSION ERROR", e);
    currentUser = null;
  }

  if(currentUser) {
    hideAuth();
    cloudReady = true;
    initialSyncResolved = true;
    setSyncStatus("Cloud: connecting…");
    startCloudBootstrap();
  } else {
    hideBoot();
    cloudReady = false;
    initialSyncResolved = true;
    showAuth();
    setSyncStatus("Cloud: local only");
  }
}


// ===== TIMER =====
const timerState = { elapsed: 0, interval: null, running: false };
function formatTimer(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}
function renderTimer() {
  const display = document.getElementById("timerDisplay");
  const btn = document.getElementById("bottomTimerBtn");
  if(display) display.textContent = formatTimer(timerState.elapsed);
  if(btn) {
    btn.classList.toggle("timer-live", timerState.running || timerState.elapsed > 0);
    btn.textContent = timerState.running ? `⏱ ${formatTimer(timerState.elapsed)}` : (timerState.elapsed > 0 ? `⏱ ${formatTimer(timerState.elapsed)}` : "⏱ Timer");
  }
}
function stopTimerInterval() {
  if(timerState.interval) clearInterval(timerState.interval);
  timerState.interval = null;
}
function startTimer() {
  if(timerState.running) return;
  stopTimerInterval();
  timerState.running = true;
  renderTimer();
  timerState.interval = setInterval(() => {
    timerState.elapsed += 1;
    renderTimer();
  }, 1000);
}
function pauseTimer() {
  timerState.running = false;
  stopTimerInterval();
  renderTimer();
}
function resetTimer() {
  timerState.elapsed = 0;
  timerState.running = false;
  stopTimerInterval();
  renderTimer();
}
function openTimer() {
  const overlay = document.getElementById("timerOverlay");
  if(overlay) overlay.style.display = "flex";
  renderTimer();
}
function closeTimer() {
  const overlay = document.getElementById("timerOverlay");
  if(overlay) overlay.style.display = "none";
}


// ===== DEVICE LOCK / PIN =====
const PIN_KEY = "timo_training_pin_v1";
const PIN_SESSION_KEY = "timo_training_pin_session_v1";
const PIN_STAGE_KEY = "timo_training_pin_stage_v1";
const LOCK_TIMEOUT_MS = 5 * 60 * 1000;
let pinBuffer = "";
let pinTemp = "";
let pinMode = "unlock";
let appUnlocked = false;
let lastActiveAt = Date.now();

function nowTs() { return Date.now(); }
function getStoredPin() { return localStorage.getItem(PIN_KEY) || ""; }
function setStoredPin(pin) { localStorage.setItem(PIN_KEY, pin); }
function clearStoredPin() {
  localStorage.removeItem(PIN_KEY);
  localStorage.removeItem(PIN_SESSION_KEY);
  localStorage.removeItem(PIN_STAGE_KEY);
}
function markSessionActive() {
  sessionStorage.setItem(PIN_SESSION_KEY, String(nowTs()));
  lastActiveAt = nowTs();
}
function isSessionFresh() {
  const raw = sessionStorage.getItem(PIN_SESSION_KEY);
  const ts = raw ? Number(raw) : 0;
  return !!ts && nowTs() - ts < LOCK_TIMEOUT_MS;
}
function shouldStartLocked() {
  return !isSessionFresh();
}
function setLockMessage(text, isError=false) {
  const el = document.getElementById("pinMessage");
  if(!el) return;
  el.textContent = text || "";
  el.className = "pin-message" + (isError ? " error" : "");
}
function renderPinDots() {
  const wrap = document.getElementById("pinDots");
  if(!wrap) return;
  wrap.innerHTML = Array.from({length:4}, (_,i) => `<div class="pin-dot ${i < pinBuffer.length ? "filled" : ""}"></div>`).join("");
}
function updateLockTexts() {
  const title = document.getElementById("lockSubtitle");
  const resetBtn = document.getElementById("pinResetBtn");
  if(!title) return;
  const hasPin = !!getStoredPin();
  if(!hasPin && !pinTemp) {
    pinMode = "setup";
    title.textContent = "Set your 4-digit PIN";
    setLockMessage("Choose a simple PIN for this device.");
    if(resetBtn) resetBtn.style.display = "none";
  } else if(!hasPin && pinTemp) {
    pinMode = "confirm";
    title.textContent = "Confirm your PIN";
    setLockMessage("Enter the same 4 digits again.");
    if(resetBtn) resetBtn.style.display = "none";
  } else {
    pinMode = "unlock";
    title.textContent = "Enter your PIN";
    setLockMessage("");
    if(resetBtn) resetBtn.style.display = "inline-block";
  }
  renderPinDots();
}
function openLockScreen() {
  const overlay = document.getElementById("lockOverlay");
  const app = document.getElementById("mainApp");
  if(overlay) overlay.style.display = "flex";
  if(app) app.classList.add("locked");
  appUnlocked = false;
  pinBuffer = "";
  updateLockTexts();
}
function closeLockScreen() {
  const overlay = document.getElementById("lockOverlay");
  const app = document.getElementById("mainApp");
  if(overlay) overlay.style.display = "none";
  if(app) app.classList.remove("locked");
  appUnlocked = true;
  pinBuffer = "";
  markSessionActive();
  renderPinDots();
}
function handlePinComplete() {
  const stored = getStoredPin();
  if(!stored && pinMode === "setup") {
    pinTemp = pinBuffer;
    pinBuffer = "";
    updateLockTexts();
    return;
  }
  if(!stored && pinMode === "confirm") {
    if(pinBuffer === pinTemp) {
      setStoredPin(pinBuffer);
      pinTemp = "";
      closeLockScreen();
      return;
    }
    pinTemp = "";
    pinBuffer = "";
    updateLockTexts();
    setLockMessage("PINs did not match. Try again.", true);
    return;
  }
  if(stored && pinBuffer === stored) {
    closeLockScreen();
    return;
  }
  pinBuffer = "";
  renderPinDots();
  setLockMessage("Incorrect PIN. Try again.", true);
}
function pressPinKey(key) {
  if(key === "backspace") {
    pinBuffer = pinBuffer.slice(0, -1);
    renderPinDots();
    setLockMessage("");
    return;
  }
  if(key === "clear") {
    pinBuffer = "";
    renderPinDots();
    setLockMessage("");
    return;
  }
  if(pinBuffer.length >= 4) return;
  pinBuffer += key;
  renderPinDots();
  if(pinBuffer.length === 4) handlePinComplete();
}
function renderPinPad() {
  const pad = document.getElementById("pinPad");
  if(!pad) return;
  const keys = ["1","2","3","4","5","6","7","8","9","clear","0","backspace"];
  pad.innerHTML = keys.map(k => {
    const label = k === "clear" ? "Clear" : (k === "backspace" ? "⌫" : k);
    return `<button class="pin-key" data-pin-key="${k}">${label}</button>`;
  }).join("");
  pad.querySelectorAll("[data-pin-key]").forEach(btn => {
    btn.onclick = () => pressPinKey(btn.dataset.pinKey);
  });
}
function setupLockScreen() {
  renderPinPad();
  updateLockTexts();
  const resetBtn = document.getElementById("pinResetBtn");
  if(resetBtn) {
    resetBtn.onclick = () => {
      const ok = confirm("This will remove the saved PIN on this device and let you create a new one.");
      if(!ok) return;
      clearStoredPin();
      pinTemp = "";
      pinBuffer = "";
      updateLockTexts();
    };
  }
  document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === "hidden") {
      markSessionActive();
    } else {
      const raw = sessionStorage.getItem(PIN_SESSION_KEY);
      const ts = raw ? Number(raw) : 0;
      if(ts && nowTs() - ts >= LOCK_TIMEOUT_MS) openLockScreen();
      else if(!appUnlocked && shouldStartLocked()) openLockScreen();
      else markSessionActive();
    }
  });
  ["click","input","touchstart","keydown","scroll"].forEach(evt => {
    document.addEventListener(evt, () => { if(appUnlocked) markSessionActive(); }, {passive:true});
  });
  if(shouldStartLocked()) openLockScreen();
  else closeLockScreen();
}

const bottomTimerBtn = document.getElementById("bottomTimerBtn");
if(bottomTimerBtn) bottomTimerBtn.onclick = () => openTimer();
const timerCloseBtn = document.getElementById("timerCloseBtn");
if(timerCloseBtn) timerCloseBtn.onclick = () => closeTimer();
const timerStartBtn = document.getElementById("timerStartBtn");
if(timerStartBtn) timerStartBtn.onclick = () => startTimer();
const timerPauseBtn = document.getElementById("timerPauseBtn");
if(timerPauseBtn) timerPauseBtn.onclick = () => pauseTimer();
const timerResetBtn = document.getElementById("timerResetBtn");
if(timerResetBtn) timerResetBtn.onclick = () => resetTimer();
document.getElementById("timerOverlay")?.addEventListener("click", e => { if(e.target.id === "timerOverlay") closeTimer(); });

const finishSummaryDoneBtn = document.getElementById("finishSummaryDoneBtn");
if(finishSummaryDoneBtn) finishSummaryDoneBtn.onclick = () => { closeFinishSummary(); showToast("Workout completed"); };
document.getElementById("finishSummaryOverlay")?.addEventListener("click", e => { if(e.target.id === "finishSummaryOverlay") { closeFinishSummary(); showToast("Workout completed"); } });

const calendarToggleBtn = document.getElementById("calendarToggleBtn");
if(calendarToggleBtn) calendarToggleBtn.onclick = () => { ui.calendarCollapsed = !ui.calendarCollapsed; renderCalendar(); };


// ===== RELEASE READINESS HELPERS =====
function persistLocalStateNow() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    console.error("Local persist failed", e);
    return false;
  }
}
function hasAnyCompletedSetForCurrentDay() {
  const exs = getCurrentDayExercises();
  for (const ex of exs) {
    const count = Math.max(0, Number(setCountOf(ui.week, ui.day, ex) || 0));
    for (let i = 0; i < count; i++) {
      const s = getSet(ui.week, ui.day, ex, i);
      if (String(s.done || "") === "1") return true;
    }
    if (blockDoneOf(ui.week, ui.day, ex) && isRecoveryLike(ui.week, ui.day, ex)) return true;
  }
  return false;
}
function updateConnectivityState() {
  if (navigator.onLine) {
    setSyncStatus(currentUser ? "Cloud: synced" : "Cloud: local only");
  } else {
    setSyncStatus("Cloud: offline");
    safeSetText("saveStatus", "Offline — changes stay on this device until connection returns.");
  }
}
function installReleaseReadinessListeners() {
  window.addEventListener("online", () => {
    updateConnectivityState();
    showToast("Back online");
    if (currentUser) scheduleCloudSave();
  });
  window.addEventListener("offline", () => {
    updateConnectivityState();
    showToast("Offline mode");
  });
  window.addEventListener("pagehide", () => {
    persistLocalStateNow();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      persistLocalStateNow();
    }
  });
}


// ===== BACKUP / RESTORE =====
function exportBackupNow() {
  try {
    const snapshot = JSON.stringify(state, null, 2);
    const blob = new Blob([snapshot], { type: "application/json" });
    const a = document.createElement("a");
    const stamp = new Date().toISOString().slice(0,19).replace(/[:T]/g, "-");
    a.href = URL.createObjectURL(blob);
    a.download = `timo-training-backup-${stamp}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 500);
    showToast("Backup exported");
  } catch (e) {
    console.error("Backup export failed", e);
    showToast("Export failed");
  }
}
async function importBackupFile(file) {
  if (!file) return;
  try {
    const raw = await file.text();
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") throw new Error("Invalid backup");
    state = parsed;
    persistLocalStateNow();
    safeSetText("saveStatus", "Backup restored on this device.");
    renderApp();
    if (currentUser && navigator.onLine) scheduleCloudSave();
    showToast("Backup restored");
  } catch (e) {
    console.error("Backup import failed", e);
    showToast("Import failed");
  }
}
function installBackupActions() {
  const exportBtn = ensureElement("exportBackupBtn");
  const importBtn = ensureElement("importBackupBtn");
  const input = ensureElement("backupImportFile");
  if (exportBtn) exportBtn.onclick = () => exportBackupNow();
  if (importBtn && input) importBtn.onclick = () => input.click();
  if (input) input.onchange = async (e) => {
    const file = e.target.files?.[0];
    await importBackupFile(file);
    input.value = "";
  };
}

// ===== APP BOOT =====
function runBasicStabilityChecks() {
  try {
    if (!Array.isArray(DAY_ORDER) || DAY_ORDER.length !== 7) console.warn("DAY_ORDER is invalid");
    if (!ensureElement("mainApp")) console.warn("mainApp root not found");
    if (!ensureElement("metrics")) console.warn("metrics root not found");
    if (!ensureElement("exerciseList")) console.warn("exerciseList root not found");
  } catch(e) {
    console.error("Basic stability checks failed", e);
  }
}
function bootApp() {
  runBasicStabilityChecks();
  installReleaseReadinessListeners();
  installBackupActions();
  resetTimer();
  initSupabaseApp();
  setupLockScreen();
  goToday();
  updateConnectivityState();
}

bootApp();