import { Button, Card, List } from "antd";
import React from "react";
import Proptypes from "prop-types";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data, onClickMore, loading }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button onClick={onClickMore} loading={loading}>
            more
          </Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: Proptypes.string.isRequired,
  data: Proptypes.array.isRequired,
  onClickMore: Proptypes.func.isRequired,
  loading: Proptypes.bool.isRequired,
};

export default FollowList;
