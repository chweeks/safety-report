safetyapp.controller('formPostCtrl', ['$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.postFormData = function(report_to_be_confidential, fdm_event, report_date, location_airport, date_the_event_occurred, location_of_event_other_than_airport, location_country, event_category, event_title, description_of_issueevent, other_information_and_suggestions_from_the_reporter, any_operational_impact, pilot_in_command_name, second_in_command_name, time_the_event_occurred, cabin_crew_name, additional_crew_member_name, callsign, diversion_airport, did_this_occur_in_flight, tail_number, aircraft_type, route_from, route_to, were_you_the_pilot_flying, crew_position, seat_occupied, pilot_flying, pilot_flying_seat, runway_used, aircraft_altitude, flft_aircraft_altitude, airspeed_kias, flight_phase_at_start_of_event, ac_weight, kglb_ac_weight, type_of_flight, event_runway_conditions, temperature_c, meteorological_conditions, visibility, wind_direction, wind_velocity, qnh, icing, turbulence, rain, thunderstorms, msm_visibility, meteorological_conditions_iv, did_the_light_hit_your_eye_directly_or_from_the_side, describe_visual_phychological_physical_effects, do_you_intend_to_seek_medical_attention, duration_of_visual_effects, color, do_you_feel_you_were_intentionally_tracked, duration_of_exposure_seconds, elevation_of_the_beam_from_horizontal_degrees, light_source_stationary_or_moving, nature_of_beam_constant_flicker_pulsed, position_of_light_source_relative_to_geographical_feature_of_aircraft, relative_intensity_flashbulb_headlight_sunlight, was_the_beam_visible_prior_to_the_incident, where_did_the_light_enter_the_cockpit, aircraft_bank_angle, aircraft_pitch_angle, heading_approximate_heading_if_in_turn, type_name_of_approach_or_departure_procedure, can_you_estimate_how_far_away_the_light_source_was_from_your_location, did_any_of_these_sustain_damage_by_the_light, did_anyone_else_see_the_light_beam, did_the_light_come_on_suddenly_and_did_it_become_brighter_as_you_approachedit, did_the_light_prevent_or_hamper_you_from_doing_those_tasks_or_was_the_light_more_of_an_annoyance, did_the_light_seem_to_track_your_path_or_was_there_incidental_contact, did_you_attempt_an_evasive_manoeuvre, did_you_look_straight_into_the_light_beam_or_off_to_the_side, did_you_touch_or_rub_your_eyes_at_the_time_of_the_incident, how_long_was_the_exposure, how_successful_were_you_avoiding_it, how_would_you_describe_the_brightness_of_the_light, if_it_flickered_how_rapidly_and_regularly, if_so_did_the_beam_follow_you_as_you_tried_to_move_away, was_it_equally_bright_in_all_areas_or_was_it_brighter_in_one_area, was_the_light_coming_directly_from_its_source_or_did_it_appear_to_be_reflected_off_other_surface, was_the_light_continuous_or_did_it_seem_to_flicker, was_the_source_moving, were_there_multiple_sources_of_light, what_tasks_were_you_performing_when_the_exposure_occurred, what_was_between_the_light_source_and_your_eyes, autopilot, autothrottle, flaps, speedbrake, spoilers, gear, tcas_alert, type_of_ra, complied_with_ra_command, loss_of_separation, direction_of_traffic_horizontal, direction_of_traffic_vertical, aircraft_vertical_speed, vertical_deviation, reported_to_atc, deviation_detected_by, what_was_the_rate_of_climb_approachin_the_cleared_altitude_level, thousandft_level_off, altitude_capture_mode_armed, altitude_captured, altitude_selection_confirmed_by_pnf, correct_altitude_read_back_by_pnf, correct_altitute_set_by_pf, type_of_warning, did_you_follow_the_egpws_procedure, vertical_speed, radio_altimeter, errors_description, aircraft_area_damaged, maintenance_facility, applicable_checklist_performed, defect_entry_made_in_techlog, position_on_glidepath, heading, altitude_change, change_of_attitude_pitch, change_of_attitude_roll, change_of_attitude_yaw, suspected_ac_visibile, suspected_aircraft_type, suspected_aircraft_callsign, estimated_separation_nm, stickshaker, type_of_animal, number_of_animals_seen, number_of_animals_struck, describe_points_of_impact, fire, sparks, smoke, fumes) {
    console.log("The boys")
    var postData = { 'FDM_Event': fmd_event,
                    'Report_Date': report_date,
                    'Location_Airport': location_aiport,
                    'Date_the_Event_Occurred': date_the_event_occured,
                    'Location_of_Event_other_than_Airport': location_of_the_event_other_than_airport,
                    'Location_Country': location_country,
                    'Event_Category': event_category,
                    'Event_Title': event_title,
                    'Description_of_IssueEvent': description_of_issueevent,
                    'Other_information_and_suggestions_from_the_reporter': other_information_and_suggestions_from_the_reporter,
                    'Any_Operational_Impact': any_operational_impact,
                    'Pilot_in_Command_Name': pilot_in_command_name,
                    'Second_in_Command_Name': second_in_command_name,
                    'Time_the_Event_Occurred': time_the_event_occured,
                    'Cabin_Crew_Name': cabin_crew_name,
                    'Additional_Crew_Member_Name': addition_crew_member_name,
                    'Callsign': callsign,
                    'Diversion_Airport': diversion_aiport,
                    'Did_this_occur_in_flight': did_this_occur_in_flight,
                    'Tail_Number': tail_number,
                    'Aircraft_Type': aircraft_type,
                    'Route_From': route_from,
                    'Route_To': route_to,
                    'Were_you_the_pilot_flying': were_you_the_pilot_flying,
                    'Crew_Position': crew_position,
                    'Seat_Occupied': seat_occupied,
                    'Pilot_Flying': pilot_flying,
                    'Pilot_Flying_Seat': pilot_flying_seat,
                    'Runway_Used': runway_used,
                    'Aircraft_Altitude': aircraft_altitude,
                    'FLft_Aircraft_Altitude': flft_aircraft_altitude,
                    'Airspeed_KIAS': airspeed_kias,
                    'Flight_Phase_at_Start_of_Event': flight_phase_at_start_of_event,
                    'AC_Weight': ac_weight,
                    'KgLb_AC_Weight': kglb_ac_weight,
                    'Type_of_Flight': type_of_flight,
                    'Event_Runway_Conditions': event_runway_conditions,
                    'Temperature_C': temperature_c,
                    'Meteorological_Conditions': meteorological_conditions,
                    'Visibility': visibility,
                    'Wind_Direction': wind_direction,
                    'Wind_Velocity': wind_velocity,
                    'QNH': qnh,
                    'Icing': icing,
                    'Turbulence': turbulence,
                    'Rain': rain,
                    'Thunderstorms': thunderstorms,
                    'mSM_Visibility': msm_visibility,
                    'Meteorological_Conditions_iv': meteorological_conditions_iv,
                    'Did_the_light_hit_your_eye_directly_or_from_the_side': did_the_light_hit_your_eye_directly_or_from_the_side,
                    'Describe_visual_phychological_physical_effects': describe_visual_phychological_physical_effects,
                    'Do_you_intend_to_seek_medical_attention': do_you_intend_to_seek_medical_attention,
                    'Duration_of_visual_effects': duration_of_visual_effects,
                    'Color': color,
                    'Do_you_feel_you_were_intentionally_tracked': do_you_feel_you_were_intentionally_tracked,
                    'Duration_of_exposure_seconds': duration_of_exposure_seconds,
                    'Elevation_of_the_beam_from_horizontal_degrees': elevation_of_the_beam_from_horizontal_degrees,
                    'Light_Source_stationary_or_moving': light_Source_stationary_or_moving,
                    'Nature_of_Beam_constant_flicker_pulsed': nature_of_beam_constant_flicker_pulsed,
                    'Position_of_light_source_relative_to_geographical_feature_of_aircraft': position_of_light_source_relative_to_geographical_feature_of_aircraft,
                    'Relative_intensity_flashbulb_headlight_sunlight': relative_intensity_flashbulb_headlight_sunlight,
                    'Was_the_beam_visible_prior_to_the_incident': was_the_beam_visible_prior_to_the_incident,
                    'Where_did_the_light_enter_the_cockpit': where_did_the_light_enter_the_cockpit,
                    'Aircraft_Bank_Angle': aircraft_bank_angle,
                    'Aircraft_Pitch_Angle': aircraft_pitch_angle,
                    'Heading_Approximate_heading_if_in_turn': heading_approximate_heading_if_in_turn,
                    'Type_Name_of_approach_or_departure_procedure': type_name_of_approach_or_departure_procedure,
                    'Can_you_estimate_how_far_away_the_light_source_was_from_your_location': can_you_estimate_how_far_away_the_light_source_was_from_your_location,
                    'Did_any_of_these_sustain_damage_by_the_light': did_any_of_these_sustain_damage_by_the_light,
                    'Did_anyone_else_see_the_light_beam': did_anyone_else_see_the_light_beam,
                    'Did_the_light_come_on_suddenly_and_did_it_become_brighter_as_you_approachedit': did_the_light_come_on_suddenly_and_did_it_become_brighter_as_you_approachedit,
                    'Did_the_light_prevent_or_hamper_you_from_doing_those_tasks_or_was_the_light_more_of_an_annoyance': did_the_light_prevent_or_hamper_you_from_doing_those_tasks_or_was_the_light_more_of_an_annoyance,
                    'Did_the_light_seem_to_track_your_path_or_was_there_incidental_contact': did_the_light_seem_to_track_your_path_or_was_there_incidental_contact,
                    'Did_you_attempt_an_evasive_manoeuvre': did_you_attempt_an_evasive_manoeuvre,
                    'Did_you_look_straight_into_the_light_beam_or_off_to_the_side': did_you_look_straight_into_the_light_beam_or_off_to_the_side,
                    'Did_you_touch_or_rub_your_eyes_at_the_time_of_the_incident': did_you_touch_or_rub_your_eyes_at_the_time_of_the_incident,
                    'How_long_was_the_exposure': how_long_was_the_exposure,
                    'How_successful_were_you_avoiding_it': how_successful_were_you_avoiding_it,
                    'How_would_you_describe_the_brightness_of_the_light': how_would_you_describe_the_brightness_of_the_light,
                    'If_it_flickered_how_rapidly_and_regularly': if_it_flickered_how_rapidly_and_regularly,
                    'If_so_did_the_beam_follow_you_as_you_tried_to_move_away': if_so_did_the_beam_follow_you_as_you_tried_to_move_away,
                    'Was_it_equally_bright_in_all_areas_or_was_it_brighter_in_one_area': was_it_equally_bright_in_all_areas_or_was_it_brighter_in_one_area,
                    'Was_the_light_coming_directly_from_its_source_or_did_it_appear_to_be_reflected_off_other_surface': was_the_light_coming_directly_from_its_source_or_did_it_appear_to_be_reflected_off_other_surface,
                    'Was_the_light_continuous_or_did_it_seem_to_flicker': was_the_light_continuous_or_did_it_seem_to_flicker,
                    'Was_the_source_moving': was_the_source_moving,
                    'Were_there_multiple_sources_of_light': were_there_multiple_sources_of_light,
                    'What_tasks_were_you_performing_when_the_exposure_occurred': what_tasks_were_you_performing_when_the_exposure_occurred,
                    'What_was_between_the_light_source_and_your_eyes': what_was_between_the_light_source_and_your_eyes,
                    'Autopilot': autopilot,
                    'Autothrottle': autothrottle,
                    'Flaps': flaps,
                    'Speedbrake': speedbrake,
                    'Spoilers': spoilers,
                    'Gear': gear,
                    'TCAS_Alert': tcas_alert,
                    'Type_of_RA': type_of_ra,
                    'Complied_with_RA_Command': complied_with_ra_command,
                    'Loss_of_separation': loss_of_separation,
                    'Direction_of_Traffic_horizontal': direction_of_traffic_horizontal,
                    'Direction_of_Traffic_vertical': direction_of_traffic_vertical,
                    'Aircraft_Vertical_Speed': aircraft_vertical_speed,
                    'Vertical_Deviation': vertical_deviation,
                    'Reported_to_ATC': reported_to_atc,
                    'Deviation_detected_by': deviation_detected_by,
                    'What_was_the_rate_of_climb_approachin_the_Cleared_altitude_level': what_was_the_rate_of_climb_approachin_the_cleared_altitude_level,
                    'Thousandft_level_off': thousandft_level_off,
                    'Altitude_capture_mode_armed': altitude_capture_mode_armed,
                    'Altitude_captured': altitude_captured,
                    'Altitude_selection_confirmed_by_PNF': altitude_selection_confirmed_by_pnf,
                    'Correct_altitude_read_back_by_PNF': correct_altitude_read_back_by_pnf,
                    'Correct_altitute_set_by_PF': correct_altitute_set_by_pf,
                    'Type_of_warning': type_of_warning,
                    'Did_you_follow_the_EGPWS_procedure': did_you_follow_the_egpws_procedure,
                    'Vertical_Speed': vertical_speed,
                    'Radio_Altimeter': radio_altimeter,
                    'Errors_Description': errors_description,
                    'Aircraft_Area_Damaged': aircraft_area_damaged,
                    'Maintenance_Facility': maintanence_facility,
                    'Applicable_checklist_performed': applicable_checklist_performed,
                    'Defect_entry_made_in_Techlog': defect_entry_made_in_techlog,
                    'Position_on_Glidepath': position_on_glidepath,
                    'Heading': heading,
                    'Altitude_Change': altitude_change,
                    'Change_of_attitude_Pitch': change_of_attitude_pitch,
                    'Change_of_attitude_Roll': change_of_attitude_roll,
                    'Change_of_attitude_Yaw': change_of_attitude_yaw,
                    'Suspected_ac_visibile': suspected_ac_visibile,
                    'Suspected_aircraft_type': suspected_aircraft_type,
                    'Suspected_aircraft_Callsign': suspected_aircraft_callsign,
                    'Estimated_Separation_NM': estimated_Separation_nm,
                    'Stickshaker': stickshaker,
                    'Type_of_Animal': type_of_animal,
                    'Number_of_Animals_Seen': number_of_animals_seen,
                    'Number_of_Animals_Struck': number_of_animals_struck,
                    'Describe_points_of_impact': describe_points_of_impact,
                    'Fire': fire,
                    'Sparks': sparks,
                    'Smoke': smoke,
                    'Fumes': fumes,
                    'auth_key': $cookies.get('auth_key')};
      $http.post('https://immense-castle-3453.herokuapp.com/events', postData, 'POST');
      });
    };
}]);