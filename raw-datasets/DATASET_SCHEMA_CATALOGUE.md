# Raw Datasets & Technical Telemetry Schema Catalogue (`DS-001` – `DS-066`)

All 66 machine-readable datasets in `raw-datasets/` specify explicit units, sampling cadence, clock reference (`UTC`), and missing-value markers (`NaN` / `SENSOR_OFFLINE`).

| Dataset ID | Filename | Format | Clock / Timebase | Primary Variables & Units |
|---|---|---|---|---|
| `DS-001` | `DS-001_polbain_causeway_tide_gauge_1min.csv` | CSV | UTC (1-min) | `astro_pred_m_cd` (m CD), `storm_surge_residual_m` (m), `observed_level_m_cd` (m CD) |
| `DS-002` | `DS-002_vespera_aws_meteorology_5min.csv` | CSV | UTC (5-min) | `mslp_hpa` (hPa), `wind_gust_kt` (knots), `air_temp_c` (°C) |
| `DS-003` | `DS-003_ssen_coig11kv09_protection_events.json` | JSON | GPS UTC | `event_utc`, `code`, `outage_duration_s` (s) |
| `DS-004` | `DS-004_vespera_genA_and_busC2_load_events.csv` | CSV | UTC | `bus_c2_cleanroom_kw` (kW), `bus_c2_limit_kw` (4.50 kW) |
| `DS-005` | `DS-005_vespera_domestic_water_pulse_1min.csv` | CSV | UTC (1-min) | `flow_rate_l_min` (L/min), `cumulative_window_litres` (L) |
| `DS-006` | `DS-006_b104_hvac_controller_audit.txt` | TXT | BMS UTC | `MODE`, `TEMP_C` (°C), `EXTRACT_M3_HR` (m³/hr) |
| `DS-007` | `DS-007_ullapool_fishmarket_daily_landings_nov2026_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-008` | `DS-008_c1047_polbain_inductive_axle_counts_nov10_16_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-009` | `DS-009_lochbroom_wave_rider_buoy_30min_nov2026_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-010` | `DS-010_westerbus_61b_gps_stop_punctuality_nov2026_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-011` | `DS-011_calmac_ullapool_stornoway_sailing_stats_q4_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-012` | `DS-012_sepa_river_broom_level_gauge_15min_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-013` | `DS-013_district_business_winter_hours_audit_export_part1.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-014` | `DS-014_ullapool_harbour_berth_occupancy_nov2026_part1.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-015` | `DS-015_coigach_community_wind_turbine_kw_output_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-016` | `DS-016_morefield_gritter_route_salt_spread_tonnes_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-017` | `DS-017_achiltibuie_rain_gauge_daily_2026_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-018` | `DS-018_ullapool_library_footfall_and_loans_2026_part1.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-019` | `DS-019_ullapool_fishmarket_daily_landings_nov2026_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-020` | `DS-020_c1047_polbain_inductive_axle_counts_nov10_16_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-021` | `DS-021_lochbroom_wave_rider_buoy_30min_nov2026_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-022` | `DS-022_westerbus_61b_gps_stop_punctuality_nov2026_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-023` | `DS-023_calmac_ullapool_stornoway_sailing_stats_q4_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-024` | `DS-024_sepa_river_broom_level_gauge_15min_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-025` | `DS-025_district_business_winter_hours_audit_export_part2.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-026` | `DS-026_ullapool_harbour_berth_occupancy_nov2026_part2.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-027` | `DS-027_coigach_community_wind_turbine_kw_output_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-028` | `DS-028_morefield_gritter_route_salt_spread_tonnes_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-029` | `DS-029_achiltibuie_rain_gauge_daily_2026_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-030` | `DS-030_ullapool_library_footfall_and_loans_2026_part2.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-031` | `DS-031_ullapool_fishmarket_daily_landings_nov2026_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-032` | `DS-032_c1047_polbain_inductive_axle_counts_nov10_16_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-033` | `DS-033_lochbroom_wave_rider_buoy_30min_nov2026_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-034` | `DS-034_westerbus_61b_gps_stop_punctuality_nov2026_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-035` | `DS-035_calmac_ullapool_stornoway_sailing_stats_q4_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-036` | `DS-036_sepa_river_broom_level_gauge_15min_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-037` | `DS-037_district_business_winter_hours_audit_export_part3.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-038` | `DS-038_ullapool_harbour_berth_occupancy_nov2026_part3.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-039` | `DS-039_coigach_community_wind_turbine_kw_output_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-040` | `DS-040_morefield_gritter_route_salt_spread_tonnes_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-041` | `DS-041_achiltibuie_rain_gauge_daily_2026_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-042` | `DS-042_ullapool_library_footfall_and_loans_2026_part3.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-043` | `DS-043_ullapool_fishmarket_daily_landings_nov2026_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-044` | `DS-044_c1047_polbain_inductive_axle_counts_nov10_16_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-045` | `DS-045_lochbroom_wave_rider_buoy_30min_nov2026_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-046` | `DS-046_westerbus_61b_gps_stop_punctuality_nov2026_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-047` | `DS-047_calmac_ullapool_stornoway_sailing_stats_q4_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-048` | `DS-048_sepa_river_broom_level_gauge_15min_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-049` | `DS-049_district_business_winter_hours_audit_export_part4.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-050` | `DS-050_ullapool_harbour_berth_occupancy_nov2026_part4.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-051` | `DS-051_coigach_community_wind_turbine_kw_output_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-052` | `DS-052_morefield_gritter_route_salt_spread_tonnes_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-053` | `DS-053_achiltibuie_rain_gauge_daily_2026_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-054` | `DS-054_ullapool_library_footfall_and_loans_2026_part4.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-055` | `DS-055_ullapool_fishmarket_daily_landings_nov2026_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-056` | `DS-056_c1047_polbain_inductive_axle_counts_nov10_16_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-057` | `DS-057_lochbroom_wave_rider_buoy_30min_nov2026_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-058` | `DS-058_westerbus_61b_gps_stop_punctuality_nov2026_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-059` | `DS-059_calmac_ullapool_stornoway_sailing_stats_q4_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-060` | `DS-060_sepa_river_broom_level_gauge_15min_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-061` | `DS-061_district_business_winter_hours_audit_export_part5.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-062` | `DS-062_ullapool_harbour_berth_occupancy_nov2026_part5.json` | JSON | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-063` | `DS-063_coigach_community_wind_turbine_kw_output_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-064` | `DS-064_morefield_gritter_route_salt_spread_tonnes_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-065` | `DS-065_achiltibuie_rain_gauge_daily_2026_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
| `DS-066` | `DS-066_ullapool_library_footfall_and_loans_2026_part5.csv` | CSV | UTC | Validated district series (`NaN` = sensor offline) |
