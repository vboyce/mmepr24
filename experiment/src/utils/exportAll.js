import { CLOZE_STIM } from '../cloze_stim.js';
import { COMP_Q } from '../comp_q.js';
import { MAZE_STIM } from '../maze_stim.js';
import { exportArrayToCSV } from './exportArrayToCSV.js';

// Export all data files
exportArrayToCSV(CLOZE_STIM, 'exported_cloze_stim.csv');
exportArrayToCSV(COMP_Q, 'exported_comp_q.csv');
exportArrayToCSV(MAZE_STIM, 'exported_maze_stim.csv');