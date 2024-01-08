import type { TablePaginationConfig } from "antd";
import { useState } from "react";

/**
 * set default pagination for table pagination
 */

export default function useTablePagination(init?: TablePaginationConfig) {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 20,
    pageSizeOptions: [5, 10, 20, 40],
    showSizeChanger: true,
    total: 0,
    ...init,
  });

  return { pagination, setPagination };
}
